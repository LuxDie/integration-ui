'use strict';

angular.module('myApp.dataSource')
  .value('statuses', {
  "1": {
    "text": "Can't Run",
    "icon": {
      "small": "minus-sign",
      "big": "minus-sign",
      "full": "minus-sign",
      "square": "minus-sign",
      "folder": ""
    },
    "context": "danger"
  },
  "0": {
    "text": "Pending",
    "icon": {
      "small": "question-sign",
      "big": "question-sign",
      "full": "question-sign",
      "square": "question-sign",
      "folder": ""
    },
    "context": "warning"
  },
  "2": {
    "text": "Running",
    "icon": {
      "small": "refresh",
      "big": "refresh",
      "full": "refresh",
      "square": "refresh",
      "folder": ""
    },
    "context": "info"
  },
  "3": {
    "text": "Failed",
    "icon": {
      "small": "remove-circle",
      "big": "remove-circle",
      "full": "exclamation-sign",
      "square": "remove-circle",
      "folder": "folder-close"
    },
    "context": "danger"
  },
  "4": {
    "text": "Passed",
    "icon": {
      "small": "ok-circle",
      "big": "ok-circle",
      "full": "ok-sign",
      "square": "check",
      "folder": "folder-close"
    },
    "context": "success"
  }
}
);
