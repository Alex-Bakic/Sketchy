(ns sketchy.components.add-idea
  (:require [reagent.core :as r]
            [re-frame.core :as rf]))

(defn new-idea []
  (let [val (r/atom "")]
    (fn []
      [:div#new-idea
       [:input {:type "text"
                :placeholder "Enter some ideas you have"
                :value @val
                :on-change #(reset! val (-> % .-target .-value))}]
       [:button {:class "btn btn-default" 
                 :on-click #(rf/dispatch [:add-idea @val])}
        "Add"]])))
