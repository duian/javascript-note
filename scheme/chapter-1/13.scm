(define (sum term a next b)
  (if (> a b)
   0
  (+ (term a)
      (sum term (next a) next b))))

(define (inc x) (+ x 1))

(define (identity x) x)

(define (sum-integers a b)
  (sum identity a inc b))

(sum-integers 1 10)
