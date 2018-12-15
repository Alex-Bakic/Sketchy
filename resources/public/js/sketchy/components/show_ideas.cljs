(ns sketchy.components.show-ideas
  (:require [re-frame.core :as rf]))

(defn show-idea [i]
  [:p
   [:span i]
   [:button  {:class "btn btn default" :on-click #(rf/dispatch [:remove-idea i])} 
    "Delete"]])

(defn show-all-ideas []
 (let [db (rf/subscribe [:ideas])] 
   [:ul (into [:div#ideas-list] 
              (for [i @db] (show-idea i)))]))
