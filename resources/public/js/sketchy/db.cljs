(ns sketchy.db 
  (:require [cljs.reader]
            [re-frame.core :as rf]))

(def ls-key "db")                 
;; localstore key

(defn ideas->storage
  [ideas]
  (.setItem js/localStorage ls-key (str ideas))) 
  ;; written as an EDN map

(rf/reg-cofx
  :local-store-ideas
  (fn [cofx _]
      ;; put the localstore todos into the coeffect 
      ;; under :local-store-todos
      (assoc cofx :local-store-ideas
             ;; read in todos from localstore
             ;; and process into a sorted map
             (into (sorted-map)
                   (some->> (.getItem js/localStorage ls-key)
                            (cljs.reader/read-string))))))

(comment

"The problem domain has the following qualities. 
 
- There needs to be a pairing of the idea with a sensible key.
  This is because we will have many ideas, which we will want
  to access individually , to remove or add metadata to like 
  comments etc.

- The problem with using a vector, is that we would need to have
  a map stored in each index as we are storing more than just the
  string in each spot. Moreover we don't benefit off of the 
  conviniencies indexes provide. Like we said above there is the
  need for metadata. With single layered structures we can use 
  the key and get the value almost immediately. In this case it 
  would be the map holding the idea and subsequent meta-data. 

- So we turn to maps for the answer. If we went with a regular 
  hashmap , meaning the items aren't sorted, we would need the 
  key to also show order as well as uniqueness. However, to be 
  able to know and assume they are sorted means , for example,
  that in the views section we can just loop over it and render
  each element as it comes. After a while the user will want to
  delete items and will leave gaps in the ids we use, so if were
  going to use ids and loop over items we may accidentally render
  a lot of nil items and thus that is another case we have to cover.

")
