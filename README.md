# RIT Rate My Professors Extension

[**Chrome** extension][link-chrome] [<img valign="middle" src="https://img.shields.io/chrome-web-store/v/lcionigofpcbfpmnipnioapimoggnbda.svg?label=%20">](https://chrome.google.com/webstore/detail/rate-my-professors-for-ri/lcionigofpcbfpmnipnioapimoggnbda?hl=en&authuser=0)

[**Firefox** addon][link-firefox] [<img valign="middle" src="https://img.shields.io/amo/v/rate-my-professors-for-rit.svg?label=%20">][link-firefox]

[Click here for the version that works for any school](https://github.com/CalvinWu4/Any-School-Rate-My-Professors-Extension)

This extension shows the [Rate My Professors](https://www.ratemyprofessors.com/) ratings of professors while searching for classes on [Tiger Center](https://tigercenter.rit.edu/tigerCenterApp/api/class-search) and [CSH Schedule Maker](https://schedulemaker.csh.rit.edu/).

Professors' names will link to their Rate My Professors page (or the search results if not found).

The most helpful rating is chosen as the most recent rating with the most net upvotes (regardless of the quality given). (The most helpful rating on Rate My Professors always has an "Awesome" overall quality.) Also, the "Would take again" value won't show up unless there are eight or more ratings and the majority of ratings answer that question. 

To better find professors, this extension will try the first part of a hyphenated last name, different middle/last name combos, and the middle name as the first name. It will also try all associated nicknames or diminutive names for first names from [here](https://github.com/carltonnorthern/nickname-and-diminutive-names-lookup). For example, Thomas Reichlmayr on RIT's course search is found as Tom Reichlmayr on Rate My Professors. Finally, there is the [`addedNicknames.js`](https://github.com/CalvinWu4/Rate-My-Professor-Extension/blob/master/addedNicknames.js) file for custom nicknames (e.g. Thiagarajah Arujunan should refer to Al Arujunan).

![Screenshot](images/screenshot.png)
![Screenshot](images/screenshot2.png)

[link-chrome]: https://chrome.google.com/webstore/detail/rate-my-professors-for-ri/lcionigofpcbfpmnipnioapimoggnbda?hl=en&authuser=0 "Version published on Chrome Web Store"
[link-firefox]: https://addons.mozilla.org/en-US/firefox/addon/rate-my-professors-for-rit/ "Version published on Mozilla Add-ons"
