(define (f n)
    (if (< n 3)
        n
        (+ (f (- n 1))
           (* 2 (f (- n 2)))
           (* 3 (f (- n 3))))))

(f 3)

(define (g n)
  (if (< n 3)
    n
    (g-iter ()))
