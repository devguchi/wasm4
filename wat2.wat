(module
  (func $i (import "imports" "imported_func") (param i32))
  (func (export "expoted_func")
    i32.const 45
    call $i
  )
)
