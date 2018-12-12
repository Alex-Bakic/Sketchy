(ns sketchy.subs
  (:require [re-frame.core :as rf]))

;; monitors the ideas array, for any insertions or deletions
(rf/reg-sub
  :ideas
  (fn [db _]
    (:ideas db)))

