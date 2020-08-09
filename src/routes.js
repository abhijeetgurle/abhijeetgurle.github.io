import React from "react";
import { Route } from "react-router-dom";
import { AnimatedSwitch, spring } from "react-router-transition";
import Countries from "./containers/Countries/Countries";
import Home from "./containers/Home/Home";

const glide = (val) => {
  return spring(val, {
    stiffness: 174,
    damping: 24,
  });
};

const pageTransitions = {
  atEnter: {
    offset: 100,
  },
  atLeave: {
    offset: glide(-100),
  },
  atActive: {
    offset: glide(0),
  },
};

const routes = (
  <AnimatedSwitch
    {...pageTransitions}
    mapStyles={(styles) => ({
      transform: `translateX(${styles.offset}%)`,
    })}
    className="switch-wrapper"
  >
    <Route path="/countries" component={Countries}></Route>
    <Route path="/" component={Home}></Route>
  </AnimatedSwitch>
);

export default routes;
