(define (big-two x y z)
  (if (> x y)
    (if (> z y)
        (+ x z) (+ x y))
    (if (< x z)
        (+ z y) (+ x y))
))

(big-two 10 20 3)
