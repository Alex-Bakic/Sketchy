(ns sketchy.core
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [sketchy.components.add-idea :as ai]
            [sketchy.components.show-ideas :as si]
            [sketchy.db :as d]
            [sketchy.events :as e]
            [sketchy.subs :as s]))

(defn ui []
  [:div#ui
      [ai/new-idea]
      [:h3 "All your ideas"]
      [si/show-all-ideas]])

(defn ^:export start []
  (rf/dispatch-sync [:initialise])
  (r/render [ui] (.getElementById js/document "root")))
