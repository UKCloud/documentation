
function mishiChat() {
    var host = "https://sandbox.mishi.ai";
    // var host = "http://localhost:5005"
    var SPEECH_DOMAIN = host;
    var FILE_SERVER_DOMAIN = host;
    var filehost = host;
    var jobMessage=3;
    // var messageHit = false;
    var customFilehost = "";

    var labels = {
        'en': {
            help: 'Help',
            restart: 'Restart',
            cancel: 'Cancel',
            faqs: 'FAQ',
            emailChat: 'Email Chat',
            changeLanguage: 'Change Language',
            transferToAgent: 'Transfer to human',
            transferToBot: 'Transfer to bot',
            typeMessage: 'Type a message ...',
            connecting: 'Connecting...',
            formSubmission: 'Thanks for the details'
        }
    };

    var sdkConfig = {
        "socketURL": host + "/socket.io/socket.io.js",
        "socketBasePath": host
    };

    function displayChat(){
        $('#chat_btn').css("display", "none");
        $('.mishi-chat-window-parent').css("display", "block");
        return;
    }

    function BotMessagingClient(cfg, chatWindow) {
        this.config = cfg;
        this.chatWindow = chatWindow;
        this.socketConfig = sdkConfig;
        this.init();
    }

    BotMessagingClient.prototype.setLocation = function (location) {
        this.config.location = location;
    };

    BotMessagingClient.prototype.deferIO = function () {
        var self = this;
        if (window.io)
            self.connectSocket();
        else
            setTimeout(function () {
                self.deferIO()
            }, 50);
    };

    BotMessagingClient.prototype.init = function () {
        var self = this;
        var elem = document.createElement("script");
        elem.type = "application/javascript";
        elem.src = self.socketConfig.socketURL;
        document.body.appendChild(elem);
        self.deferIO();
    };

    BotMessagingClient.prototype.connectSocket = function () {
        var self = this;
        if (!navigator.onLine) {
            showError("Please check your internet connection!", null, 30000);
            return;
        }
        if (self.config.isAnonymous) {
            self.config.senderId = 'anonymous' + guid();
        }
        this.socket = io.connect(self.socketConfig.socketBasePath, { 'force new connection': true });

        this.socket.on('disconnect', function () {
            self.disconnected = true;
            self.chatWindow.onSocketDisconnect();
            showError("Couldn't connect to Mishi right now!");
        });

        this.socket.on('connect', function () {
            self.socket.emit('joinserver', self.config.senderId, 'desktop', {
                isDeveloper: self.config.isDeveloper,
                senderId: self.config.senderId,
                botType: self.config.botType,
                botId: self.config.bot_id,
                profileMeta: self.config.profileMeta,
                language: self.config.language,
                debug: self.config.debug,
                location: self.config.location,
                reconnect: self.disconnected
            });
            self.chatWindow.onSocketConnect();
            self.disconnected = false;
        });

        this.socket.on('chat', function (msTime, people, msg) {
            var data = { 'message': msg };
            if (data.message) {
                data.message = self.processMessage(data.message);
                setTimeout(function () {
                    self.chatWindow.pushMessage(data);
                }, msgTimeout * 500);
                msgTimeout++;
                } else {
                    console.log("Error in rendering message");
                }
            });
            
            this.socket.on('debugEvent', function (data) {
                if (self.chatWindow.config.onDebugEvent) {
                    self.chatWindow.config.onDebugEvent(data);
                }
            });
            
            this.socket.on('message', function (data) {
                if(data.nerMeta && data.nerMeta.fileServerUrl) {
                    customFilehost = data.nerMeta.fileServerUrl;
                } else {
                    customFilehost = "";
                }
                if (data.message || data.attachment || data.text) {
                    
                    data.message = self.processMessage(data.message || data.text);
                    setTimeout(function () {
                        self.chatWindow.pushMessage(data);
                    }, msgTimeout * 500);
                    msgTimeout++;
                } else {
                    console.log("Error in rendering message");
                }
        });

        this.socket.on('user_message', function (data) {
            self.chatWindow.pushMessage(data, true);
        });
    };

    var msgTimeout = 1;

    BotMessagingClient.prototype.disconnectSocket = function () {
        if (this.socket) {
            this.socket.emit('disconnect');
            this.socket.disconnect();
        }
    };

    BotMessagingClient.prototype.sendMessage = function (message, visibleMessage, isAttachment, isForm) {
        msgTimeout = 1;
        var self = this;
        if (!this.socket) {
            return;
        }

        // $(".template-button:not(.enabled)").addClass('disabled');

        disableComposebar(false);
        var updateProfile = false;
        if (!self.firstUserMessage) {
            self.firstUserMessage = true;
            updateProfile = true;
        }
        this.socket.emit('send', new Date().getTime(), {
            message: message,
            client_id: self.config.client_id,
            senderId: self.config.senderId,
            botType: self.config.botType,
            botId: self.config.bot_id,
            isDeveloper: self.config.isDeveloper,
            debug: self.config.debug,
            language: self.config.language,
            location: self.config.location,
            updateProfile: updateProfile,
            visibleMessage: visibleMessage,
            isForm: isForm
        });

        if (isAttachment) {
            self.chatWindow.pushMessage(message, true, true);
            return;
        }

        if (!isForm)
            message = self.processMessage(message);
        else
            return;

        if (visibleMessage)
            self.chatWindow.pushMessage(visibleMessage, true);
        else
            self.chatWindow.pushMessage(message, true);
    };

    BotMessagingClient.prototype.processMessage = function (message) {
        if (!message)
            return;
        if (!(/<[a-z][\s\S]*>/i.test(message)))
            message = this.parseURLs(message);
        else message = this.replace_content(message);
        return message;
    };

    BotMessagingClient.prototype.replace_content = function (content)
    {
        var exp_match = /(\b(https?|):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
        var element_content=content.replace(exp_match, "<a target='_blank' href='$1'>$1</a>");
        var new_exp_match =/(^|[^\/])(www\.[\S]+(\b|$))/gim;
        var new_content=element_content.replace(new_exp_match, '$1<a target="_blank" href="http://$2">$2</a>');
        return new_content;
    }

    BotMessagingClient.prototype.parseURLs = function (text) {
        var imgTags = [], imgTag;
        var urlRegex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.‌​-]+(:[0-9]+)?|(?:www‌​.|[-;:&=\+\$,\w]+@)[‌​A-Za-z0-9.-]+)((?:\/‌​[\+~%\/.\w-_]*)?\??(‌​?:[-\+=&;%@.\w_]*)#?‌​(?:[\w]*))?)[^\s]+/g;
        var imgUrl = /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i;
        var videoUrl = /(http)?s?:?(\/\/[^"']*\.(?:mp4|flv|mov|wmv|avi|ogg|webm))/i;
        var youtubeUrl = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/i;
        text = text.replace(urlRegex, function (url) {
            if (imgUrl.test(url)) {
                return '<img class="msg-img" src="' + url + '" alt="' + url + '"/>';
            } else if (videoUrl.test(url)) {
                return '<video class="msg-img" controls><source src="' + url + '"></video>';
            } else if (youtubeUrl.test(url)) {
                var url = url.replace("watch?v=", "v/");
                return '<object class="msg-img" width="230" data="' + url + '"></object>';
            }
            return '<a href="' + url + '" target="_blank">' + url + '</a>';
        });
        return text;
    };

    function chatWindow(cfg) {
        this.config = cfg;
        this.init();
    }

    var audio_context;
    var recorder;

    function startUserMedia(stream) {
        var input = audio_context.createMediaStreamSource(stream);
        recorder = new Recorder(input, { numChannels: 1 });
        startRecording();
    }

    function startRecording() {
        recorder && recorder.record();
    }

    function stopRecording(config) {
        recorder && recorder.stop();
        preparePayload(config);
        recorder.clear();
    }

    function preparePayload(config) {
        recorder && recorder.exportWAV(function (blob) {
            var reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = function () {
                var audioBase64 = reader.result;
                audioBase64 = audioBase64.split(',')[1];

                $.ajax({
                    url: SPEECH_DOMAIN + '/speech/stt',
                    dataType: 'json',
                    type: 'post',
                    data: { audio: audioBase64, botId: config.bot_id, orgId: config.orgId, sessionId: config.senderId },
                    success: function (data, textStatus, jQxhr) {
                        $('.btj-microphone').removeClass('converting');
                        $('.chat-window-input').val(data.transcript);
                        var e = jQuery.Event("keydown");
                        e.which = 13;
                        e.keyCode = 13;
                        $(".chat-window-input").trigger(e);
                    },
                    error: function (jqXhr, textStatus, errorThrown) {
                        $('.btj-microphone').removeClass('converting');
                    }
                });

            }
        });
    }

    chatWindow.prototype.bindEvents = function () {

        window.onclick = function (event) {

            if ($(event.target).hasClass("btj-menu-wrapper") || $(event.target).parent().hasClass("btj-menu-wrapper")) {
                return false;
            }
            else {
                if ($('.mishi_menu-items').css("display") == 'block') {
                    $('.mishi_menu-items').css("display", "none");
                    $("#menu-item-icon").attr("src", "../../styles/images/menu-icon.svg");
                }
            }
        }

        $(".mishi-chat-window-parent").draggable({ handle: '.drag-header', containment: "window", scroll: false });
        var self = this;
        var _chatTemplate = this.config.chatTemplate;

        _chatTemplate.off('click', '.close-bt').on('click', '.close-bt', function (event) {
            // $('.warning-modal').modal('show');
            // $(".chat-window-content").css("position", "relative");

            // $('.modal-backdrop').appendTo('.chat-window-content');
            // $(".modal-backdrop").css("position", "absolute");
            // $(".modal-backdrop").css("border-radius", "7px 7px 0 7px");
            // $('body').removeClass("modal-open")
            // $('body').css("padding-right", "");
            self.destroy();
        });

        _chatTemplate.off('click', '#debug-toggler').on('click', '#debug-toggler', function (event) {
            if ($(this).hasClass("fa-toggle-on")) {
                self.config.debug = false;
                self.config.botMessagingClient.config.debug = false;
                $(this).addClass("fa-toggle-off");
                $(this).removeClass("fa-toggle-on");
                $('.debug-label').html('DEBUG OFF');
            } else {
                self.config.debug = true;
                self.config.botMessagingClient.config.debug = true;
                $(this).removeClass("fa-toggle-off");
                $(this).addClass("fa-toggle-on");
                $('.debug-label').html('DEBUG ON');
            }

            if (self.config.onDebugToggle) {
                self.config.onDebugToggle(self.config.debug);
            }
        });

        _chatTemplate.off('click', '.minus-bt').on('click', '.minus-bt', function (event) {
            $('.mishi-chat-window-parent').css("display", "none");
            if (self.config.onMinimize)
                self.config.onMinimize();
        });

        _chatTemplate.off('click', '.iframe-close').on('click', '.iframe-close', function (event) {
            $("#sdk-webview").css('display', 'none');
        });


        _chatTemplate.off('click', '.btj-attachment-wrapper').on('click', '.btj-attachment-wrapper', function (event) {
            document.getElementById('ft-hidden-file-input').click();
        });

        _chatTemplate.off('change', '#ft-hidden-file-input').on('change', '#ft-hidden-file-input', function (event) {

            var inputField = $(this);
            var file = $(this)[0].files[0];
            if (file.size / 1024 / 1024 > 9.9) {
                showError("File size should be less than 10MB");
                return;
            }
            var formData = new FormData();
            formData.append("file", file, file.name);
            formData.append("upload_file", true);
            var hosturl = FILE_SERVER_DOMAIN;
            if(customFilehost!=="") {
                hosturl = customFilehost;
            }
            $.ajax({
                type: "POST",
                url: hosturl + "/file/" + self.config.senderId + "/upload",
                success: function (data) {
                    var message = {
                        file_token: data.file_token,
                        file_url: hosturl + "/file/" + encodeURI(data.file_token),
                        file_name: file.name
                    };
                    self.config.botMessagingClient.sendMessage(message, null, true);
                    inputField.val(null);
                },
                error: function (error) {
                    // handle error
                    inputField.val(null);
                },
                async: true,
                data: formData,
                cache: false,
                contentType: false,
                processData: false,
                timeout: 60000
            });
        });

        _chatTemplate.off('keydown', '.chat-window-input').on('keydown', '.chat-window-input', function (event) {
            var _this = $(this);
            if (event.keyCode === 13) {
                event.preventDefault();
                self.sendMessage(_this);
                return;
            }
        });

        _chatTemplate.off('click', '.didyoumean').on('click', '.didyoumean', function (event) {
            var _this = $(this);
            var messageDYM = _this[0].innerHTML;
            self.config.botMessagingClient.sendMessage(messageDYM);
        });

        _chatTemplate.off('click', '.help').on('click', '.help', function (event) {
            var _this = $(this);
            var message = _this[0].innerHTML;
            self.config.botMessagingClient.sendMessage(message);
            $('.mishi_menu-items').css("display", "none");
            $("#menu-item-icon").attr("src", "../../styles/images/menu-icon.svg");
        });

        _chatTemplate.off('click', '.restart').on('click', '.restart', function (event) {
            var _this = $(this);
            var message = _this[0].innerHTML;
            self.config.botMessagingClient.sendMessage(message);
            $('.mishi_menu-items').css("display", "none");
            $("#menu-item-icon").attr("src", "../../styles/images/menu-icon.svg");
        });

        _chatTemplate.off('click', '.changeLanguage').on('click', '.changeLanguage', function (event) {
            var _this = $(this);
            var message = _this[0].innerHTML;
            self.config.botMessagingClient.sendMessage('change language', message);
            $('.mishi_menu-items').css("display", "none");
            $("#menu-item-icon").attr("src", "../../styles/images/menu-icon.svg");
        });

        _chatTemplate.off('click', '.transfer-to-agent').on('click', '.transfer-to-agent', function (event) {
            var _this = $(this);
            var message = _this[0].innerHTML;
            self.config.botMessagingClient.sendMessage(message);
            if (message === labels[self.config.language || 'en'].transferToBot) {
                $('.transfer-to-agent').html(labels[self.config.language || 'en'].transferToAgent);
            } else {
                $('.transfer-to-agent').html(labels[self.config.language || 'en'].transferToBot);
            }
            $('.mishi_menu-items').css("display", "none");
            $("#menu-item-icon").attr("src", "../../styles/images/menu-icon.svg");
        });

        _chatTemplate.off('click', '.template-button').on('click', '.template-button', function (event) {
            var _this = $(this);
            if (_this.hasClass('disabled')) {
                return;
            }
            var message, visibleMessage;
            switch (_this[0].getAttribute("type")) {
                case 'postback':
                    message = _this[0].getAttribute("value");
                    visibleMessage = _this[0].innerHTML;
                    break;
                case 'web_url':
                    window.open(_this[0].getAttribute("value"), '_blank');
                    return;
                case 'webview_url':
                    $("#sdk-iframe").prop('src', _this[0].getAttribute("value"));
                    $("#sdk-webview").css('display', 'block');
                    return;
                case 'float_window_url':
                    var left = ($(window).width() / 2) - (900 / 2);
                    var top = ($(window).height() / 2) - (600 / 2);
                    var popup = window.open(_this[0].getAttribute("value"), "popup", "width=900, height=600, top=" + top + ", left=" + left);
                    return;
            }

            if (message)
                self.config.botMessagingClient.sendMessage(message, visibleMessage);
        });

        _chatTemplate.off('click', '.action-trigger').on('click', '.action-trigger', function (event) {
            var _this = $(this);
            var message, visibleMessage;
            switch (_this[0].getAttribute("type")) {
                case 'postback':
                    message = _this[0].getAttribute("value");
                    visibleMessage = _this[0].innerHTML;
                    break;
                case 'web_url':
                    window.open(_this[0].getAttribute("value"), '_blank');
                    return;
                case 'webview_url':
                    $("#sdk-webview").css('display', 'block');
                    $("#sdk-iframe").prop('src', _this[0].getAttribute("value"));
                    return;
            }

            if (message)
                self.config.botMessagingClient.sendMessage(message, visibleMessage);
        });

        _chatTemplate.off('click', '.left-nav').on('click', '.left-nav', function (event) {
            var _this = $(this);
            var uId = _this[0].getAttribute("uId");
            slideListTemplate(uId, false);
        });

        _chatTemplate.off('click', '.right-nav').on('click', '.right-nav', function (event) {
            var _this = $(this);
            var uId = _this[0].getAttribute("uId");
            slideListTemplate(uId, true);
        });

        _chatTemplate.off('change', '.btj-mic-checkbox').on('change', '.btj-mic-checkbox', function (event) {
            if (!self.config.speech) {
                self.config.speech = {};
            }
            if (!self.config.speech.streamStreaming)
                initSpeechSocket(self);
            else {
                stopSpeechProcess(self);
            }
        });

        _chatTemplate.off('click', '.btj-menu-wrapper').on('click', '.btj-menu-wrapper', function (event) {
            if ($('.mishi_menu-items').css("display") == 'block') {
                $('.mishi_menu-items').css("display", "none");
                $("#menu-item-icon").attr("src", "../../styles/images/menu-icon.svg");
            }
            else {
                $('.mishi_menu-items').css("display", "block");
                $("#menu-item-icon").attr("src", "../../styles/images/menu-close-gray.svg");
            }
        });

        function slideListTemplate(uId, isRight) {
            var currentIndex = 0, i;
            var x = document.getElementsByClassName(uId);
            for (i = 0; i < x.length; i++) {
                if (x[i].style.display === "block") {
                    currentIndex = i;
                    break;
                }
            }
            if (currentIndex === 0 && !isRight) {
                currentIndex = x.length - 1;
            } else if (currentIndex === x.length - 1 && isRight) {
                currentIndex = 0;
            } else if (isRight) {
                currentIndex += 1;
            } else {
                currentIndex -= 1;
            }
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            x[currentIndex].style.display = "block";
        }
    };

    chatWindow.prototype.init = function () {
        var self = this;
        var language = 'en';
        if (self.config.language) {
            language = self.config.language;
        }
        if (!this.config.botIcon) {
            this.config.botIcon = 'images/bot-dummy.png';
        }
        var title = labels[language].connecting;
        if (this.config.authRequired) {
            title = 'Login';
        }
        var windowHtml = $(this.getTemplate()).tmpl({
            title: title,
            authRequired: self.config.authRequired,
            disableHeaderButtons: self.config.disableHeaderButtons,
            host: filehost,
            labels: labels,
            userlanguage: language,
            langEnabled: self.config.language,
            agentEnabled: self.config.enableAgentTransfer
        });
        this.config.chatTemplate = windowHtml;
        $('body').append(windowHtml);
        setTimeout(function () {
            $('.mishi-chat-window-parent').toggleClass('in')
        }, 100);
        $("<link/>", {
            rel: "stylesheet",
            type: "text/css",
            href: "https://fonts.googleapis.com/css?family=Lato"
        }).appendTo("head");

        this.bindEvents();

        if (this.config.onWindowInit) {
            this.config.onWindowInit();
        }

        if (this.config.isLocationRequired && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                if (position && position.coords && position.coords.latitude) {
                    var locValue = {
                        location: {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        }
                    };
                    self.config.location = locValue;
                    self.config.botMessagingClient.setLocation(locValue);
                }
            }, function (error) {
            });
        }
        self.initMessagingClient();
    };

    chatWindow.prototype.initMessagingClient = function () {
        var self = this;
        if (this.config.authRequired) {
            registerAuthFormCallBack(self)
        } else
            this.config.botMessagingClient = new BotMessagingClient(this.config, this);
    };

    function registerAuthFormCallBack(chatWindowInst) {
        var working = false;
        $('.ft-login').on('submit', function (e) {
            e.preventDefault();
            if (working) return;

            var identity = e.currentTarget[0].value;
            var authcode = e.currentTarget[1].value;
            working = true;
            var $this = $(this);
            var $state = $this.find('button > .state');
            $this.addClass('loading');
            $state.html('Authenticating');
            $('#login-spinner').show();
            $.ajax({
                crossDomain: true,
                url: sdkConfig.socketBasePath + '/faq/' + chatWindowInst.config.bot_id + '/invite/login/',
                data: JSON.stringify({
                    identity: identity,
                    authcode: authcode
                }),
                error: function () {
                    working = false;
                    $this.removeClass('ok loading');
                    $state.html('Log in');
                    $('#login-spinner').hide();
                    $('#ft-login-info').html('Some thing went wrong! Try again later');
                },
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                statusCode: {
                    401: function () {
                        working = false;
                        $this.removeClass('ok loading');
                        $state.html('Log in');
                        $('#login-spinner').hide();
                        $('#ft-login-info').html('Invalid credentials!');
                    }
                },
                success: function (data) {
                    chatWindowInst.config.botMessagingClient = new BotMessagingClient(chatWindowInst.config, chatWindowInst);
                    $('.box-title').html(labels[chatWindowInst.config.language].connecting);
                    $('#ft-login-div').remove()
                    working = false;
                },
                type: 'POST'
            });


        });
    }

    chatWindow.prototype.destroy = function () {
        if (this.config && this.config.chatTemplate) {
            if (this.config.botMessagingClient)
                this.config.botMessagingClient.disconnectSocket();
            this.config.chatTemplate.remove();
            if (this.config.onDestroy)
                this.config.onDestroy();
        }
    };

    chatWindow.prototype.onSocketConnect = function () {
        $('.box-title').html(this.config.title);
        //this.pushMessage({"message": this.config.greeting}, false);
    };

    chatWindow.prototype.onSocketDisconnect = function () {
        $('.box-title').html('Disconnected');
    };

    chatWindow.prototype.sendMessage = function (input) {
        var self = this;
        if (input.val().trim() === "") {
            return;
        }
        self.config.botMessagingClient.sendMessage(input.val());
        input.val('');
    };

    chatWindow.prototype.showTypingIndicator = function () {
        var self = this;
        $(".typing-indicator").css("visibility", 'visible');
        setTimeout(self.hideTypingIndicator, 5000);
    };

    chatWindow.prototype.hideTypingIndicator = function () {
        $(".typing-indicator").css("visibility", 'hidden');
    };

    function disableComposebar(flag) {
        // if (flag) {
        //     $("#chat-window-type-box").prop('disabled', true);
        //     $(".box-footer").css('background-color', '#e7e7e8');
        //     $(".btj-microphone-wrapper").hide();
        // } else {
            $("#chat-window-type-box").prop('disabled', false);
            $(".box-footer").css('background-color', '#fff');
            $(".btj-microphone-wrapper").show();
        // }
    }

    chatWindow.prototype.pushMessage = function (message, isRight, isAttachmentSent, isForm) {
        var self = this;
        var html = '';
        if (self.currentForm) {
            $("#" + self.currentForm + " input").prop("disabled", true);
            $("#" + self.currentForm + " select").prop("disabled", true);
            $("#" + self.currentForm + " button").attr("disabled", "disabled");
            self.currentForm = null;
        }
        if (isForm) {
            message = labels[self.config.language || 'en'].formSubmission;
        }
        if (message && message.isAttachment) {
            $(".btj-attachment-wrapper").css("visibility", 'visible');
        } else {
            $(".btj-attachment-wrapper").css("visibility", 'hidden');
        }
        if (message && message.disableComposebar) {
            disableComposebar(true);
        } else {
            disableComposebar(false);
        }

        if (isRight) {
            if (isAttachmentSent) {
                html = $(this.getTemplate('msgRightAttachment')).tmpl({
                    msg: message
                });
            } else {
                html = $(this.getTemplate('msgRight')).tmpl({
                    msg: message
                });
            }
            this.showTypingIndicator();
        } else {
            if (message && message.disableComposebar) {
                disableComposebar(true, labels[self.config.language || 'en'].chooseOptionAbove, self);
            } else {
                disableComposebar(false, null, self);
            }
            var botIcon = self.config.botIcon;
            if (message.humanAgent) {
                botIcon = filehost + "/static/common/images/human.svg";
                $('.transfer-to-agent').html(labels[self.config.language || 'en'].transferToBot);
            } else {
                $('.transfer-to-agent').html(labels[self.config.language || 'en'].transferToAgent);
            }
            var entityType;
            var timestamp = new Date();
            var hours = timestamp.getHours();
            var minutes = timestamp.getMinutes();
            var ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0' + minutes : minutes;
            timestamp = hours + ':' + minutes + ' ' + ampm;
            var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
            var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
            var todaydate = {date: new Date().getDate(),
                            day: days[new Date().getDay()],
                            month: months[new Date().getMonth()]};
            if (message.nerMeta) {
                entityType = message.nerMeta.entityType
            }
            if (message.attachment && message.attachment.type === 'template' && message.attachment.payload.template_type === 'button') {
                html = $(this.getTemplate('button')).tmpl({
                    botName: self.config.name,
                    botIcon: botIcon,
                    payload: message.attachment.payload,
                    entityType: entityType
                });
                // if(message.nerMeta.askedEntity) disableComposebar(true);
            } else if (message.attachment && message.attachment.type === 'template' && message.attachment.payload.template_type === 'generic') {
                html = $(this.getTemplate('generic')).tmpl({
                    uId: guid(),
                    botName: self.config.name,
                    botIcon: botIcon,
                    payload: message.attachment.payload,
                    entityType: entityType
                });
            } else if (message.attachment && message.attachment.type === 'template' && message.attachment.payload.template_type === 'list') {
                html = $(this.getTemplate('list')).tmpl({
                    uId: guid(),
                    botName: self.config.name,
                    botIcon: botIcon,
                    payload: message.attachment.payload,
                    entityType: entityType
                });
            } else if (message.attachment && message.attachment.type === 'template' && message.attachment.payload.template_type === 'table') {
                html = $(this.getTemplate('table')).tmpl({
                    uId: guid(),
                    botName: self.config.name,
                    botIcon: botIcon,
                    payload: message.attachment.payload,
                    keys: Object.keys(message.attachment.payload.table_data),
                    entityType: entityType
                });
            } else if (message.type === 'form') {
                self.currentForm = guid();
                html = $(this.getTemplate('form')).tmpl({
                    msg: message.message || message.text,
                    botName: self.config.name,
                    botIcon: botIcon,
                    formData: message.data,
                    formId: self.currentForm
                });

                setTimeout(function () {
                    $("#" + self.currentForm + ' .form-control:first').focus();
                    $("#" + self.currentForm + " input").keypress(function (event) {
                        if (event.which === 13) {
                            event.preventDefault();
                            $("#" + self.currentForm).submit();
                        }
                    });
                    $("#" + self.currentForm + " select").change(function (event) {
                        event.preventDefault();
                        $("#" + self.currentForm).submit();
                    });
                    $("#" + self.currentForm + " input:radio").change(function (event) {
                        $("#" + self.currentForm).submit();
                    });
                    $("#" + self.currentForm).validator().on('submit', function (event) {
                        if (event.isDefaultPrevented()) {
                            var children = $(this).find('.form-group');
                            for (var i = 0; i < children.length; i++) {
                                if ($(children[i]).css('display') === 'block' && $(children[i]).hasClass('has-error')) {
                                    return;
                                }
                            }
                        }
                        event.preventDefault();
                        var children = $(this).find('.form-group');
                        var endOfForm = true;
                        for (var i = 0; i < children.length; i++) {
                            if ($(children[i]).css('display') === 'none') {
                                $(children[i]).removeClass('has-error');
                                $(children[i]).removeClass('has-danger');
                                $(children[i]).css('display', 'block');
                                $(".direct-chat-messages").animate({
                                    scrollTop: $(".direct-chat-messages").prop("scrollHeight")
                                }, 0);
                                $(children[i]).find('.form-control').focus();
                                endOfForm = false;
                                break;
                            }
                        }
                        if (endOfForm) {
                            var formData = $(this).serializeArray();
                            var data = {};
                            for (var i in formData) {
                                data[formData[i].name] = formData[i].value;
                            }
                            self.config.botMessagingClient.sendMessage(data, null, false, true);
                        }
                    });
                }, 300);

            } else {
                html = $(this.getTemplate('msgLeft')).tmpl({
                    msg: message.message || message.text,
                    botName: self.config.name,
                    botIcon: botIcon,
                    choices: message.choices,
                    entityType: entityType,
                    payload: {
                        quick_replies: message.quick_replies
                    },
                    isVertical: message.isVertical,
                    isMultiSelect: message.isMultiSelect,
                    todaydate: todaydate
                });
            }
            this.hideTypingIndicator();
        }

        $(".mishi #chat-container").append(html);

        $(".direct-chat-messages").animate({
            scrollTop: $(".direct-chat-messages").prop("scrollHeight")
        }, 0);

        $(".datePickerr").datetimepicker({
            useCurrent: true,
            format: 'YYYY-MM-DD',
            minDate: new Date().setHours(0,0,0,0),
            widgetPositioning: {
                // horizontal: 'left',
                vertical: 'top'
            }
        });
        $('.datePickerr1').datetimepicker({
            useCurrent: true,
            format: 'YYYY-MM-DD',
            minDate: new Date().setHours(0, 0, 0, 0),
            widgetPositioning: {
                // horizontal: 'left',
                vertical: 'top'
            }
        });
        $('.datePickerr2').datetimepicker({
            useCurrent: false,
            format: 'YYYY-MM-DD',
            maxDate: new Date(),
            widgetPositioning: {
                // horizontal: 'left',
                vertical: 'top'
            }
        });

        $('.timePickerr').datetimepicker({
            useCurrent: false,
            format: 'hh:mm A',
            widgetPositioning: {
                vertical: 'top'
            }
        });

        $('.timePickerr-form').datetimepicker({
            useCurrent: false,
            format: 'hh:mm A',
            widgetPositioning: {
                vertical: 'top',
                horizontal: 'right'
            }
        });

        $(".datePickerr").on("dp.change", function (e) {
            var now = new Date(e.date);
            var month = (now.getMonth() + 1);
            var day = now.getDate();
            if (month < 10)
                month = "0" + month;
            if (day < 10)
                day = "0" + day;
            var today = now.getFullYear() + '-' + month + '-' + day;
            if ($(this).parent().prop('className').indexOf('control-label') < 0) {
                $('#chat-window-type-box').val(today);
                $("#chat-window-type-box").focus();
            } else if (self.currentForm) {

            }
            // $('#chat-window-type-box').val($('#datepicker1').val());
        });
        $(".datePickerr1").on("dp.change", function (e) {
            var now = new Date(e.date);
            var month = (now.getMonth() + 1);
            var day = now.getDate();
            if (month < 10)
                month = "0" + month;
            if (day < 10)
                day = "0" + day;
            var today = now.getFullYear() + '-' + month + '-' + day;
            if ($(this).parent().prop('className').indexOf('control-label') < 0) {
                $('#chat-window-type-box').val(today);
                $("#chat-window-type-box").focus();
            } else if (self.currentForm) {
                $("#" + self.currentForm).submit();
            }
            // $('#chat-window-type-box').val($('#datepicker1').val());
        });
        $(".datePickerr2").on("dp.change", function (e) {
            var now = new Date(e.date);
            var month = (now.getMonth() + 1);
            var day = now.getDate();
            if (month < 10)
                month = "0" + month;
            if (day < 10)
                day = "0" + day;
            var today = now.getFullYear() + '-' + month + '-' + day;

            if ($(this).parent().prop('className').indexOf('control-label') < 0) {
                $('#chat-window-type-box').val(today);
                $("#chat-window-type-box").focus();
            } else if (self.currentForm) {
                $("#" + self.currentForm).submit();
            }
            // $('#chat-window-type-box').val($('#datepicker1').val());
        });

        $(".timePickerr").on("dp.change", function (e) {
            var now = new Date(e.date);
            // $('#chat-window-type-box').val(now.getHours() + ":" + now.getMinutes());
            var hours = now.getHours();
            var minutes = now.getMinutes();
            var ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0' + minutes : minutes;
            var strTime = hours + ':' + minutes + ' ' + ampm;
            if ($(this).parent().prop('className').indexOf('control-label') < 0) {
                $('#chat-window-type-box').val(strTime);
            } else if (self.currentForm) {
                $("#" + self.currentForm).submit();
            }
            // console.log(now.getHours() + ":" + now.getMinutes());
        });

        $("#timepicker").on("blur", function (e) {
            $("#chat-window-type-box").focus();
        });

        $(".timePickerr-form").on("dp.change", function (e) {
            var now = new Date(e.date);
            // $('#chat-window-type-box').val(now.getHours() + ":" + now.getMinutes());
            var hours = now.getHours();
            var minutes = now.getMinutes();
            var ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0' + minutes : minutes;
            var strTime = hours + ':' + minutes + ' ' + ampm;
            if ($(this).parent().prop('className').indexOf('control-label') < 0) {
                $('#chat-window-type-box').val(strTime);
            } else if (self.currentForm) {
                $("#" + self.currentForm).submit();
            }
            // console.log(now.getHours() + ":" + now.getMinutes());
        });
    };

    function showError(message, hide, timeout) {
        if (!timeout) {
            timeout = 4000;
        }
        if (message)
            $('#bt-error-message').html(message);
        if (hide) {
            $('#bt-error-message').fadeOut(1000);
        } else {
            $('#bt-error-message').fadeIn(500);
            setTimeout(function () {
                showError(null, true);
            }, timeout);
        }
    }

    chatWindow.prototype.getTemplate = function (type) {
        var chatWindowTmpl = '<script id="fs-chat-window" type="text/x-jqury-tmpl"> \
            <div class="mishi" style="line-height: 22px;"><div class="mishi-chat-window-parent" id="draggable"> \
                <div class="chat-window"> \
                    <div class="chat-window-content"> \
                    {{if authRequired}} \
                        <div id="ft-login-div" class="ft-login-wrapper"> \
                            <form class="ft-login"> \
                                <input type="text" placeholder="Identity" autofocus/> \
                                <i class="fa fa-user"></i> \
                                <input type="password" placeholder="Auth Code" /> \
                                <i class="fa fa-key"></i> \
                                <button> \
                                <i id="login-spinner" class="spinner"></i> \
                                <span class="state">Log in</span> \
                                </button> \
                                <div id="ft-login-info"></div>\
                            </form> \
                        </div> \
                        {{/if}}\
                        <div id="sdk-webview">\
                            <div class="iframe-close"><span><img class="box-item" src="${host}/static/common/images/close.svg"></span></div> \
                            <iframe name="sdk-webview" id="sdk-iframe" src="" seamless="seamless" scrolling="auto" align="middle" scale="1.5"> </iframe></div>\
                        <div class="mishi_box box-primary direct-chat direct-chat-primary"> \
                            <div class="box-header drag-header" style="cursor: move;" id="draggable-header"><div style="width: 150px; height: auto; font-size:16px">UKCloud for OpenStack PoC bot</div> \
                                {{if !disableHeaderButtons}}\
                                <div class="box-tools pull-right">\
                                <span class="debug-label">DEBUG OFF</span>\
                                <span><i id="debug-toggler" class="box-item fa fa-toggle-off"></i></span> \
                                <span><img class="box-item minus-bt" src="${host}/static/common/images/line.svg"></span> \
								<span><img class="box-item close-bt" src="${host}/static/common/images/close.svg"></span> \
                                </div> \
                                {{/if}}\
                            </div> \
                            <div class="box-body"> \
                                <div id="bt-error-message"></div>\
                                <div class="direct-chat-messages" id="chat-container"> \
                                </div> \
                            </div> \
                            <div class="typing-indicator"> \
                                <span></span> \
                                <span></span> \
                                <span></span> \
                            </div> \
                            <div class="mishi_menu-items"> \
                                <ul class="bottom"> \
                                <div class="tooltip-text"> \
                                    <li class="help">${labels[userlanguage].help}</li> \
                                    <li class="restart">${labels[userlanguage].restart}</li> \
                                    <li class="restart">${labels[userlanguage].cancel}</li> \
                                </div> \
                                </ul> \
                            </div> \
                            <div class="box-footer"> \
                                <div class="btj-menu-wrapper">\
                                        <img id="menu-item-icon" src="../../styles/images/menu-icon.svg">\
                                </div>\
                                <div class="btj-attachment-wrapper">\
                                    <span><i class="fa fa-paperclip"></i></span>\
                                </div>\
                                <input id="ft-hidden-file-input" style="display: none;" type="file" accept=".txt,.pdf,.png,.jpg,.jpeg,.gif,.m4v,.mp4,.mov,.ppt"/>\
                                <div class="btj-microphone-wrapper">\
                                    <input type="checkbox" id="cb-1" name="cb" class="btj-mic-checkbox">\
                                    <label for="cb-1" class="label"></label>\
                                    \
                                </div>\
                                            <form> \
                                                <div class="chat-window-input-group"> \
                                                    <input id="chat-window-type-box" type="text" name="message" class="chat-window-input" placeholder="${labels[userlanguage].typeMessage}" autocomplete="off"> \
                                                </div> \
                                            </form> \
                                            <div class="mishi-copy-right">powered by <a target="_blank" href="http://mishi.ai">Mishi.ai</a></div> \
                                        </div> \
                                    </div> \
                                </div> \
                            </div> \
                        </div> \
                        </script>'
            ;


        switch (type) {
            case 'msgRight':
                return '<script id="fs-chat-window" type="text/x-jqury-tmpl"> \
                             <div class="direct-chat-msg right1"> \
                                <div class="direct-chat-text right1">{{html msg}}</div>\
                            </div> \
                            </script>';
            case 'msgRightAttachment':
                return '<script id="fs-chat-window" type="text/x-jqury-tmpl"> \
                             <div class="direct-chat-msg right1"> \
                                <div class="direct-chat-text right1"><span style="font-size: 24px;padding-right: 10px;display: inline-block; vertical-align: middle;">\
                                <i class="fa  fa-paperclip"></i></span>\
                                <span style="display: inline-block;vertical-align: middle;">{{html msg.file_name}}</span></div>\
                            </div> \
                            </script>';
            case 'msgLeft':
                return '<script id="fs-chat-window" type="text/x-jqury-tmpl"> \
                            <div class="direct-chat-msg"> \
                                <div class="direct-chat-info clearfix"> \
                                    <span class="direct-chat-name pull-left">${botName}</span> \
                                </div> \
                                <img class="direct-chat-img" src="${botIcon}" alt="Bot"> \
                                <div class="direct-chat-text left">{{html msg}}{{if choices}}<ul>{{each choices}}<li class="didyoumean">${$value}</li>{{/each}}</ul>{{/if}}</div> \
                            </div> \
                            {{if payload.quick_replies}} \
                                {{if !isMultiSelect}} \
                                <div class="buttons-wrapper {{if isVertical && quick_replies.length > 1}}full-width-div-buttons-wrapper{{/if}}"> \
                                    {{each payload.quick_replies}} \
                                        <div class="{{if isVertical && quick_replies.length > 1}}full-width-div {{/if}} template-button quick-reply {{if $value.keepEnabled}}enabled{{/if}}" type="${$value.type}" \
                                            {{if $value.payload}} \
                                                value="${$value.payload}" \
                                            {{/if}} \
                                            {{if $value.url}} \
                                                value="${$value.url}" \
                                            {{/if}} \
                                        >${$value.title}</div> \
                                    {{/each}} \
                                </div> \
                                {{/if}} \
                                {{if isMultiSelect}} \
                                <div class="buttons-wrapper {{if isVertical && quick_replies.length > 1}}full-width-div-buttons-wrapper{{/if}}"> \
                                    {{each payload.quick_replies}} \
                                        <div class="ismultiSelect {{if isVertical && quick_replies.length > 1}}full-width-div {{/if}} template-button quick-reply {{if $value.keepEnabled}}enabled{{/if}}" type="${$value.type}" \
                                            {{if $value.payload}} \
                                                value="${$value.payload}" \
                                            {{/if}} \
                                            {{if $value.url}} \
                                                value="${$value.url}" \
                                            {{/if}} \
                                            >${$value.title}</div> \
                                    {{/each}} \
                                </div> \
                                {{/if}} \
                            {{/if}}\
                            {{if entityType === "MS.DATE" ||  entityType === "MS.FUTUREDATE" || entityType === "MS.PASTDATE" || entityType === "MS.TIME"}}\
                            <div class="dateandtimePickers"> \
                                {{if entityType === "MS.DATE" }} \
                                    <div class="input-group date datePickerr"> \
                                        <input type="text" class="form-control" name="datepicker" id="datepicker"/> \
                                        <span style="padding: 0;" class="input-group-addon"> \
                                            <div class="calender-wrapper"><div class="displayingTodayDate">${todaydate.day}, ${todaydate.date} ${todaydate.month}</div><div class="calender-icon"><span class="glyphicon glyphicon-calendar"></span></div></div> \
                                        </span> \
                                    </div> \
                                {{/if}}\
                                {{if entityType === "MS.FUTUREDATE" }} \
                                    <div class="input-group date datePickerr1"> \
                                        <input type="text" class="form-control" name="datepicker1" id="datepicker1"/> \
                                        <span style="padding: 0;" class="input-group-addon"> \
                                            <div class="calender-wrapper"><div class="displayingTodayDate">${todaydate.day}, ${todaydate.date} ${todaydate.month}</div><div class="calender-icon"><span class="glyphicon glyphicon-calendar"></span></div></div> \
                                        </span> \
                                    </div> \
                                {{/if}}\
                                {{if entityType === "MS.PASTDATE" }} \
                                    <div class="input-group date datePickerr2"> \
                                        <input type="text" class="form-control" name="datepicker2" id="datepicker2"/> \
                                        <span style="padding: 0;" class="input-group-addon"> \
                                            <div class="calender-wrapper"><div class="displayingTodayDate">${todaydate.day}, ${todaydate.date} ${todaydate.month}</div><div class="calender-icon"><span class="glyphicon glyphicon-calendar"></span></div></div> \
                                        </span> \
                                    </div> \
                                {{/if}}\
                                {{if entityType === "MS.TIME" }} \
                                    <div class="input-group date timePickerr"> \
                                        <input type="text" class="form-control" name="timepicker" id="timepicker"/> \
                                        <span style="padding: 0;" class="input-group-addon"> \
                                            <div class="calender-wrapper"> \
                                             <div class="calender-icon"><span class="glyphicon glyphicon-time"></span></div></div> \
                                        </span> \
                                    </div> \
                                {{/if}}\
                            </div> \
                            {{/if}}\
                    <div class="display-timestamp">${timestamp} </div> \
                    </script>';
            case 'button':
                return '<script id="fs-chat-window" type="text/x-jqury-tmpl"> \
                                <div class="direct-chat-msg"> \
                                    <div class="direct-chat-info clearfix"> \
                                        <span class="direct-chat-name pull-left">${botName}</span> \
                                    </div> \
                                    <img class="direct-chat-img" src="${botIcon}" alt="Bot"> \
                                    <div class="direct-chat-text template-text">{{html payload.text}}\
                                     </div> \
                                     {{if payload.buttons}}\
                                            <div class="buttons-wrapper">\
                                                {{each payload.buttons}}\
                                                <div class="template-button {{if $value.keepEnabled}}enabled{{/if}}" type="${$value.type}" \
                                                    {{if $value.payload}} \
                                                        value="${$value.payload}" \
                                                     {{/if}}\
                                                     {{if $value.url}} \
                                                        value="${$value.url}" \
                                                     {{/if}}\
                                                >${$value.title}</div>\
                                                {{/each}}\
                                            </div>\
                                         {{/if}}\
                                </div> \
                                </script>';
            case 'generic':
                return '<script id="fs-chat-window" type="text/x-jqury-tmpl"> \
                                <div class="direct-chat-msg"> \
                                    <div class="direct-chat-info clearfix"> \
                                        <span class="direct-chat-name pull-left">${botName}</span> \
                                    </div> \
                                    <img class="direct-chat-img" src="${botIcon}" alt="Bot"> \
                                    <div class="list-wrapper main-block">\
                                        {{if payload.elements}}\
                                            <div class="mishicarousel carousel slide" id="media${uId}" data-interval="false">\
                                                <div class="carousel-inner">\
                                                    {{each(i, element) payload.elements}}\
                                                        <div class="carousel-item  {{if i == 0}} active{{/if}}">\
                                                            <div class="content-block">\
                                                                {{if element.image_url}}\
                                                                <figure class="carousel-image" style="border-radius: 10px 10px 0px 0px;background-size: cover; background-image: url(\'${element.image_url}\')" class="top-img action-trigger {{$uId}}" \
                                                                    {{if element.default_action}}\
                                                                        type="${element.default_action.type}" \
                                                                        {{if element.default_action.payload}} \
                                                                             value="${element.default_action.payload}" \
                                                                        {{/if}}\
                                                                        {{if element.default_action.url}} \
                                                                             value="${element.default_action.url}" \
                                                                        {{/if}}\
                                                                    {{/if}}\
                                                                >\
                                                                    <img style="visibility:hidden;" src="${element.image_url}" alt="image">\
                                                                </figure>\
                                                                {{/if}}\
                                                                <div class="bttm-block action-trigger"\
                                                                    {{if element.default_action}}\
                                                                        type="${element.default_action.type}" \
                                                                        {{if element.default_action.payload}} \
                                                                             value="${element.default_action.payload}" \
                                                                        {{/if}}\
                                                                        {{if element.default_action.url}} \
                                                                             value="${element.default_action.url}" \
                                                                        {{/if}}\
                                                                    {{/if}}\
                                                                >\
                                                                    <div class="col-xs-12 col-sm-12 pointer">\
                                                                        <h3>{{html element.title}}</h3>\
                                                                        <p>{{html element.subtitle}}</p>\
                                                                    </div>\
                                                                    <div class="clearfix"></div>\
                                                                </div>\
                                                                {{if element.buttons}}\
                                                                        {{each element.buttons}}\
                                                                            <div class="template-button {{if $value.keepEnabled}}enabled{{/if}}" type="${$value.type}" \
                                                                                {{if $value.payload}} \
                                                                                    value="${$value.payload}" \
                                                                                 {{/if}}\
                                                                                 {{if $value.url}} \
                                                                                    value="${$value.url}" \
                                                                                 {{/if}}\
                                                                            >${$value.title}</div>\
                                                                        {{/each}}\
                                                                {{/if}}\
                                                            </div> \
                                                        </div>\
                                                    {{/each}}\
                                                </div>\
                                            </div>\
                                            {{if payload.elements.length>1}} \
                                            <div class="mishicarousel-controls controls">\
                                                    <a data-slide="prev" href="#media${uId}" class="carousel-control-prev" style="height: fit-content;top: 80px;"><i class="fas fa-less-than" style="background: #7d4ac7;padding: 5px;"></i></a> \
                                                    <a data-slide="next" href="#media${uId}" class="carousel-control-next" style="height: fit-content;top: 80px;"><i class="fas fa-greater-than" style="background: #7d4ac7;padding: 5px;"></i></a> \
                                            </div>\
                                            {{/if}}\
                                        {{/if}}\
                                    </div>\
                                </div> \
                                </script>';
            case 'list':
                return '<script id="fs-chat-window" type="text/x-jqury-tmpl"> \
                                <div class="direct-chat-msg"> \
                                    <div class="direct-chat-info clearfix"> \
                                        <span class="direct-chat-name pull-left">${botName}</span> \
                                    </div> \
                                    <img class="direct-chat-img" src="${botIcon}" alt="Bot"> \
                                    <div class="list-wrapper">\
                                        {{if payload.elements}}\
                                            <div class="template-list-items">\
                                                {{each(i, element) payload.elements}}\
                                                    <div class="template-list-item image-cover action-trigger ${uId}" \
                                                    {{if element.default_action}}\
                                                            type="${element.default_action.type}" \
                                                            {{if element.default_action.payload}} \
                                                                 value="${element.default_action.payload}" \
                                                            {{/if}}\
                                                            {{if element.default_action.url}} \
                                                                 value="${element.default_action.url}" \
                                                            {{/if}}\
                                                        {{/if}}\
                                                    >\
                                                        <div class="text {{if !element.image_url}}full-width{{/if}}">\
                                                            <div class="title">{{html element.title}}</div>\
                                                            <div class="subtitle">{{html element.subtitle}}</div>\
                                                        </div>\
                                                        {{if element.image_url}}<div class="img" style="background-image: url(${element.image_url});"></div> {{/if}}\
                                                    </div> \
                                                {{/each}}\
                                            </div>\
                                        {{/if}}\
                                        {{if payload.buttons}} \
                                                <div class="buttons-wrapper"> \
                                                    {{each payload.buttons}} \
                                                    <div class="template-button {{if $value.keepEnabled}}enabled{{/if}}" type="${$value.type}" \
                                                        {{if $value.payload}} \
                                                            value="${$value.payload}" \
                                                         {{/if}}\
                                                         {{if $value.url}} \
                                                            value="${$value.url}" \
                                                         {{/if}}\
                                                    >${$value.title}</div> \
                                                    {{/each}} \
                                                </div> \
                                        {{/if}}\
                                    </div>\
                                </div> \
                                </script>';
            case 'form':
                return '<script id="fs-chat-window" type="text/x-jqury-tmpl"> \
                                <div class="direct-chat-msg"> \
                                    <div class="direct-chat-info clearfix"> \
                                        <span class="direct-chat-name pull-left">${botName}</span> \
                                    </div> \
                                    <img class="direct-chat-img" src="${botIcon}" alt="Bot"> \
                                    <div class="direct-chat-text left">{{html msg}}\
                                    {{if formData}}\
                                        <form id="${formId}" data-toggle="validator" role="form">\
                                            <div class="inline-form">\
                                                {{each formData}}\
                                                    <div class="form-group" {{if $index != 0 }} style="display: none;" {{/if}}>\
                                                        <label class="control-label {{if $value.type.label != "List" }}has-float-label{{/if}} {{if $value.type.label == "List" && $value.type.choices.length > 3 }}has-float-label{{/if}}" {{if $value.type.label == "List" }} style="width: 100%;" {{/if}}> \
                                                            {{if $value.type.label == "List" && $value.type.choices.length > 3 }} <span>${$value.name}</span> {{/if}}\
                                                            {{if $value.type.label == "MS.DATE"}}\
                                                                <div class="input-group date datePickerr">\
                                                                    <input type="text" placeholder="yyyy-mm-dd" class="form-control bt-chat-form-control form-control-picker" name="${$value.name}" id="datepicker" required autocomplete="off"/>\
                                                                    <span class="input-group-label">${$value.name}</span>\
                                                                    <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span>\
                                                                </div>\
                                                            {{else $value.type.label == "MS.PASTDATE"}}\
                                                                <div class="input-group date datePickerr2">\
                                                                    <input type="text" placeholder="yyyy-mm-dd" class="form-control bt-chat-form-control form-control-picker" name="${$value.name}" id="datepicker" required autocomplete="off"/>\
                                                                    <span class="input-group-label">${$value.name}</span>\
                                                                    <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span>\
                                                                </div>\
                                                            {{else $value.type.label == "MS.FUTUREDATE"}}\
                                                                <div class="input-group date datePickerr1">\
                                                                    <input type="text" placeholder="yyyy-mm-dd" class="form-control bt-chat-form-control form-control-picker" name="${$value.name}" id="datepicker" required autocomplete="off"/>\
                                                                    <span class="input-group-label">${$value.name}</span>\
                                                                    <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span>\
                                                                </div>\
                                                            {{else $value.type.label == "MS.TIME"}} \
                                                                <div class="input-group date timePickerr-form"> \
                                                                   <input type="text" placeholder="hh:mm" class="form-control bt-chat-form-control form-control-picker" name="${$value.name}" id="timepicker" required autocomplete="off"/> \
                                                                   <span class="input-group-label">${$value.name}</span>\
                                                                   <span class="input-group-addon"> \
                                                                       <span class="glyphicon glyphicon-time"></span> \
                                                                   </span> \
                                                                </div> \
                                                            {{else $value.type.label == "List" && $value.type.choices.length > 3 }} \
                                                                <select class="form-control bt-chat-form-control" name="${$value.name}" style="margin-top:0px;" required>\
                                                                    <option value="">Select..</option>\
                                                                    {{each(key, val) $value.type.choices}}\
                                                                        <option value="${value}">${key}</option>\
                                                                    {{/each}}\
                                                                </select>\
                                                            {{else $value.type.label == "List" && $value.type.choices.length <= 3 }} \
                                                                <fieldset style="position:relative;text-align: left;" class="form-control"> \
                                                                <legend>${$value.name}</legend> \
                                                                    {{each(key, val) $value.type.choices}}\
                                                                        <input type="radio" name="${$value.name}" value="${value}" required> ${key} \
                                                                    {{/each}}\
                                                                </fieldset> \
                                                            {{else $value.type.label == "MS.EMAIL"}}\
                                                                <input type="text" pattern="[A-Za-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[A-Za-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?" class="form-control bt-chat-form-control" placeholder="${$value.name}"  id="${$value.name}" name="${$value.name}" required autocomplete="off">\
                                                                <span>${$value.name}</span>\
                                                            {{else $value.type.label == "MS.PHONENUMBER"}}\
                                                                <input type="text" pattern="^[+]?[0-9]{10,16}$" class="form-control bt-chat-form-control" placeholder="${$value.name}"  id="${$value.name}" name="${$value.name}" required autocomplete="off">\
                                                                <span>${$value.name}</span>\
                                                            {{else $value.type.label == "MS.NUMBER"}}\
                                                                <input type="number" class="form-control bt-chat-form-control" placeholder="${$value.name}" id="${$value.name}" name="${$value.name}" required autocomplete="off">\
                                                                <span>${$value.name}</span>\
                                                            {{else}}\
                                                                <input type="${$value.name}" class="form-control bt-chat-form-control" placeholder="${$value.name}" id="${$value.name}" name="${$value.name}" required autocomplete="off">\
                                                                <span>${$value.name}</span>\
                                                            {{/if}}\
                                                        </label>\
                                                    </div>\
                                                {{/each}}\
                                                <div class="form-group" style="display: none;">\
                                                    <button class="form-submit-btn" type="submit">Submit</button> \
                                                </div>\
                                            </div>\
                                        </form>\
                                    {{/if}}\
                                    </div> \
                                </div> \
                            </div></script>';
            case 'table': 
                return '<script id="fs-chat-window" type="text/x-jqury-tmpl"> \
                            <div class="direct-chat-msg template-table"> \
                                <div class="direct-chat-info clearfix"> \
                                    <span class="direct-chat-name pull-left">${botName}</span> \
                                </div> \
                                <img class="direct-chat-img" src="${botIcon}" alt="Bot"> \
                                <div class="direct-chat-text left" style="margin-bottom: 7px">{{html payload.text}}</div>\
                                {{if payload.table_data}}\
                                    <table>\
                                        {{each(i, element) keys}}\
                                            <tr>\
                                                <td class="{{if i == 0}}first-row-td-left {{else i == keys.length-1}}last-row-td-left {{else}}middle-rows-td-left {{/if}}"><b>${element}</b></td>\
                                                <td class="{{if i == 0}}first-row-td-right {{else i == keys.length-1}}last-row-td-right {{else}}middle-rows-td-right {{/if}}">{{html payload.table_data[element]}}</td>\
                                            </tr>\
                                        {{/each}}\
                                    </table>\
                                {{/if}}\
                                {{if payload.buttons}} \
                                        <div class="buttons-wrapper"> \
                                            {{each payload.buttons}} \
                                            <div class="template-button quick-reply {{if $value.keepEnabled}}enabled{{/if}}" type="${$value.type}" \
                                                {{if $value.payload}} \
                                                    value="${$value.payload}" \
                                                {{/if}}\
                                                {{if $value.url}} \
                                                    value="${$value.url}" \
                                                {{/if}}\
                                            >${$value.title}</div> \
                                            {{/each}} \
                                        </div> \
                                {{/if}}\
                            </div> \
                        </script>';
        }

        return chatWindowTmpl;
    };


    var chatWindowInst;

    this.create = function (config) {
        if (!config.client_id || chatWindowInst)
            return false;
        config.botIcon = "../../styles/images/bot.png";
        config.orgId = "d7947ee8-c3e1-4548-8400-d5215e69b7d0";
        config.senderId = "user@email.com or any unique id";
        config.isAnonymous = true;
        config.isLocationRequired = false;
        config.isDeveloper = true;
        config.authRequired = false;
        config.botType = 'service';
        config.enableAgentTransfer=true;
        config.profileMeta = {
            firstName: config.profileName
        };
        $('#chat_btn').css("display", "none");
        $('.mishi-chat-window-parent').css("display", "block");
        setTimeout(function () {
            $('.debug-label').css("display", "none");
            $("#debug-toggler").css("display", "none");
        }, 10);
        config.onDestroy = function () {
            ChatInst = null;
            $('#chat_btn').css("display", "block");
        };
        config.onMinimize = function () {
            $('#chat_btn').css("display", "block");
        };
        chatWindowInst = new chatWindow(config);
        return this;
    };

    this.destroy = function (client_id) {
        if (chatWindowInst && chatWindowInst.destroy) {
            chatWindowInst.destroy();
        }
    };

    this.pushMessage = function (text, isForm) {
        if (chatWindowInst && chatWindowInst.pushMessage) {
            chatWindowInst.pushMessage(text, true, null, isForm);
        }
    };

    this.maximize = function () {

    };

    function guid() {
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }

    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    function convertFloat32ToInt16(buffer) {
        let l = buffer.length;
        let buf = new Int16Array(l / 3);

        while (l--) {
            if (l % 3 == 0) {
                buf[l / 3] = buffer[l] * 0xFFFF;
            }
        }
        return buf.buffer
    }

    function initSpeechSocket(self) {
        if (!self.config.speech) {
            self.config.speech = {};
        }
        try {
            self.config.speechSocket = io.connect(host + "/speech/stream", { forceNew: true });
        } catch (e) {

        }

        self.config.speechSocket.on('connect', function () {
            self.config.speechSocket.emit('join', 'Server Connected to Client');
        });

        self.config.speechSocket.on('disconnect', function () {
            $('.btj-microphone').removeClass('recording');
            $('#btj-mic-icon').attr('src', filehost + '/static/common/images/mic-blue.svg');
            self.config.speechSocket = null;
        });

        self.config.speechSocket.on('transcribedData', function (data) {
            if (data && data.results && data.results[0] && data.results[0].alternatives && data.results[0].alternatives[0]) {
                var final = data.results[0].isFinal;
                var trans = data.results[0].alternatives[0].transcript;
                $('.chat-window-input').val(trans);
                if (final) {
                    var e = jQuery.Event("keydown");
                    e.which = 13;
                    e.keyCode = 13;
                    $(".chat-window-input").trigger(e);
                    stopSpeechProcess(self, trans);
                    $('.btj-microphone').removeClass('recording');
                    $('#btj-mic-icon').attr('src', filehost + '/static/mic-blue.svg');
                }
            }
        });

        window.onbeforeunload = function () {
            if (self && self.config.speech.streamStreaming && self.config.speechSocket) {
                self.config.speechSocket.emit('endSpeech', {
                    botId: self.config.bot_id,
                    orgId: self.config.orgId,
                    sessionId: self.config.senderId,
                    transcribed: ''
                });
            }
        };

        self.config.speechSocket.on('joined', function (data) {
            try {
                self.config.speechSocket.emit('startSpeech', '');
                self.config.speech.streamStreaming = true;
                self.config.speech.AudioContext = window.AudioContext || window.webkitAudioContext;
                self.config.speech.context = new self.config.speech.AudioContext();
                self.config.speech.processor = self.config.speech.context.createScriptProcessor(2048, 1, 1);
                self.config.speech.processor.connect(self.config.speech.context.destination);
                self.config.speech.context.resume();

                var handleSuccess = function (stream) {
                    self.config.speech.globalStream = stream;
                    self.config.speech.input = self.config.speech.context.createMediaStreamSource(stream);
                    self.config.speech.input.connect(self.config.speech.processor);

                    self.config.speech.processor.onaudioprocess = function (e) {
                        microphoneProcess(e, self);
                    };
                };
                navigator.mediaDevices.getUserMedia({ audio: true, video: false })
                    .then(handleSuccess);

                $('.btj-microphone').addClass('recording');
                $('#btj-mic-icon').attr('src', filehost + '/static/common/images/mic-rec.svg')
            } catch (e) {
                stopSpeechProcess(self);
                console.log('No web audio support in this browser!', e);
                return;
            }
        });
    }

    function microphoneProcess(e, self) {
        var left = e.inputBuffer.getChannelData(0);
        var left16 = convertFloat32ToInt16(left);
        self.config.speechSocket.emit('speechData', left16);
    }

    function stopSpeechProcess(self, transcribed) {
        if (self.config.speechSocket) {
            self.config.speechSocket.emit('endSpeech', {
                botId: self.config.bot_id,
                orgId: self.config.orgId,
                sessionId: self.config.senderId,
                transcribed: transcribed
            });
            self.config.speechSocket.disconnect();
        }

        self.config.speech.streamStreaming = false;
        try {
            var track = self.config.speech.globalStream.getTracks()[0];
            track.stop();

            self.config.speech.input.disconnect(self.config.speech.processor);
            self.config.speech.processor.disconnect(self.config.speech.context.destination);
            self.config.speech.context.close().then(function () {
                self.config.speech.input = null;
                self.config.speech.processor = null;
                self.config.speech.context = null;
            });
        } catch (e) {

        }
    }

    return {
        create: create,
        destroy: destroy,
        pushMessage: pushMessage,
        displayChat: displayChat
    };
}

function closeBTWebview(message) {
    $("#sdk-webview").css('display', 'none');
    if (message && window.ChatInst) {
        if (message === '~form~') {
            //window.botjetCWInst.pushMessage(null, true);
        } else {
            $(".template-button:not(.enabled)").addClass('disabled');
            window.ChatInst.pushMessage(message);
        }
    }
}
