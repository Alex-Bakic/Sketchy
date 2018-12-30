(ns sketchy.components.show-keywords 
  (:require [re-frame.core :refer [dispatch subscribe]]))

(defn show-keyword [id kw]
  [:button {:class "btn btn-info kw-btn"
            :on-click #(dispatch [:remove-keyword id kw])}
    [:span [:h6 (str kw)]]])

;; the keywords will be the card subtitle of the overall card
;; showing the idea. 

;; possibly limit keywords to just a map of 
;; {:one-liner "one-liner" :sketch "sketch" :story "story"}
;; in another version
(defn show-all-keywords [id]
  (let [kws (subscribe [:keywords id])]
    (into [:div {:class "card-subtitle"}] 
          (for [kw @kws] 
            [show-keyword id kw]))))

