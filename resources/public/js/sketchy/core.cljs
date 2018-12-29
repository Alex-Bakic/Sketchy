(ns sketchy.core
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [sketchy.components.show-ideas :refer [show-all-ideas]]
            [sketchy.components.add-ideas :refer [add-idea]]
            [sketchy.db :as d]
            [sketchy.events :as e]
            [sketchy.subs :as s]))

(defn ui []
  [:div {:class "ui"}
   [:div {:class "ui-input"} 
    [add-idea]]
   [:div {:class "ui-header"}
    [:h1 "All your ideas"]]
   [:div {:class "ui-content"} 
    [show-all-ideas]]])

(defn ^:export start []
  (rf/dispatch-sync [:initialise])
  (r/render [ui] (.getElementById js/document "root")))
