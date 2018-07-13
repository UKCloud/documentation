// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE file in the project root for full license information.
if (window.location.pathname === '/index.html') {
  //Fix issues with random navs showing up on the homepage
  if ($('div#breadcrumb').children().size() == 1) {
    $('div#breadcrumb').remove();
  }
}
