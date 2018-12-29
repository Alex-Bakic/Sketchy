(ns sketchy.components.add-comments
  (:require [reagent.core :as r]
            [re-frame.core :refer [dispatch subscribe]]))

;; it will be the first element in the list group , 
;; being the "active" list item where there is an input
;; box to add, following similar mechanisms to the add
;; keywords functionality.
(defn add-comment [id]
   (let [val (r/atom "")
         clear #(reset! val "")
         save #(dispatch [:add-comment id @val]
               (clear))] 
     (fn [id]
         [:li {:class "list-group-item active"}
           [:div {:class "input-group input-group-sm mb-3"} 
              [:input {:type "text"
               :class "form-control"
               :placeholder "Add a comment"
               :value       @val
               :auto-focus  true
               :on-change   #(reset! val (-> % .-target .-value))
               :on-key-down #(case (.-which %)
                                   13 (save)
                                   nil)}]]])))

