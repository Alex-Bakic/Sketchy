(ns sketchy.components.add-keywords
  (:require [reagent.core :as r]
            [re-frame.core :as rf]))

(defn add-keyword [id idea]
  (let [val  (r/atom "")
        clear #(reset! val "")
        save #(rf/dispatch [:add-keyword id @val]
               (clear))]
    (fn [id idea]
     [:div {:class "input-group input-group-sm mb-3"} 
       [:input {:type "text"
                :class "form-control"
                :placeholder "Keywords here"
                :value       @val
                :auto-focus  true
                :on-change   #(reset! val (-> % .-target .-value))
                :on-key-down #(case (.-which %)
                                    13 (save)
                                    nil)}]])))

