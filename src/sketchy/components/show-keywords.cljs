(ns sketchy.components.show-keywords 
  (:require [re-frame.core :refer [dispatch subscribe]]))

;; should be a small grey-background with white text.
;; using the bootstrap label --> <span class="label label-default">Default</span>
(defn show-keyword [id kw]
  [:button {:class "btn btn-default"
            :on-click #(dispatch [:remove-keyword id kw])}
    [:span {:class "label label-default"} 
      kw]])

;; the keywords will be the card subtitle of the overall card
;; showing the idea. 

;; possibly limit keywords to just a map of 
;; {:one-liner "one-liner" :sketch "sketch" :story "story"}
;; in another version
(defn show-all-keywords [id]
  (let [kws (subscribe [:keywords id])]
    (into [:div {:class "card-subtitle"}] 
          (for [kw @kws] (show-keyword [id kw])))))

