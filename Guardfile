guard :shell do
  watch /.*/ do |m|
    next if ['obj/', '_site/'].any? { |p| m[0].to_s.start_with?(p) }
    system('docfx build docfx.json')
  end
end
