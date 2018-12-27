(ns sketchy.core
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [sketchy.components.show-ideas :refer [show-all-ideas]]
            [sketchy.components.add-ideas :refer [add-idea]]
            [sketchy.db :as d]
            [sketchy.events :as e]
            [sketchy.subs :as s]))

(defn ui []
  [:div#ui
    [add-idea]
    [:h2 "All your ideas"]
    [show-all-ideas]])

(defn ^:export start []
  (rf/dispatch-sync [:initialise])
  (r/render [ui] (.getElementById js/document "root")))
