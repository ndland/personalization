#!/usr/bin/env ruby

[128, 64, 48, 38, 32, 24, 19, 16].each do |size|
  system "convert -resize #{size}x#{size}! colored-rounded.png colored-#{size}x#{size}.png"
  system "convert -resize #{size}x#{size}! -unsharp 1.5x1+0.7+0.02 colored-rounded.png colored-#{size}x#{size}-unsharp.png"
end
