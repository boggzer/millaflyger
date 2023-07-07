import React, {
  ComponentProps,
  ForwardedRef,
  PropsWithChildren,
  Ref,
  forwardRef,
} from 'react';
import { motion } from 'framer-motion';

export type PageTransitionRef = Ref<HTMLDivElement>;

interface Props extends ComponentProps<typeof motion.div> {}

const PageTransition = (
  { children, ...rest }: Props,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  return (
    <motion.div
      ref={ref}
      initial={{ y: '-5px', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: '5px', opacity: 0 }}
      transition={{ type: 'spring', damping: 30, stiffness: 400 }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default forwardRef(PageTransition);
