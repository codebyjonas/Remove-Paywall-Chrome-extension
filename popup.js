// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function click(e) {
    chrome.tabs.executeScript(null,
        {
            code: "document.getElementsByClassName(\"paywall--active\")[0].style.display=\"none\" "
        });

    chrome.tabs.executeScript(null,
        {
            code: "document.getElementsByClassName(\"article__premium-content\")[0].style.display=\"block\" "
        });
    window.close();
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('remove').addEventListener('click', click);
});
