(define (linear-combintion a b x y)
  (add (mul a x) (mul b y)))

(define make-rat cons)
(define number car)
(define denom cdr)

(define (add-rat x y)
  (make-rat ()))
