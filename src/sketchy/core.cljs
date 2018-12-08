(ns sketchy.core
  (:require [reagent.core :as r]
            [re-frame.core :as rf]))

;; first need to define the state

(rf/reg-event-db
  :initialise
  (fn [_ _]
     {:count 0}))

(rf/reg-event-db
  :update-counter
   (fn [db _]
      (update db :count inc)))

(rf/reg-sub
  :count
  (fn [db _]
    (:count db)))

;; components
(defn current-count []
  (let [counter @(rf/subscribe [:count])]
    (fn []
      [:div 
        [:span counter]])))

(defn add-count-btn []
  (fn [] 
    [:div
      [:button {:on-click #(rf/dispatch [:update-counter])}
        "Increment Counter"]]))

(defn ui []
   (fn [] 
     [:div
       [current-count]
       [add-count-btn]]))

(defn ^:export start []
  (rf/dispatch-sync [:initialise])
  (r/render [ui] (.getElementById js/document "root")))
