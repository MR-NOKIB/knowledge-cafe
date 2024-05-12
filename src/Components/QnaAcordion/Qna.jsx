/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
export function Qna() {
  const [open, setOpen] = React.useState(0);
  const [alwaysOpen, setAlwaysOpen] = React.useState(true);
 
  const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <div className="mb-20">
      <Accordion open={alwaysOpen}>
        <AccordionHeader onClick={handleAlwaysOpen}>Difference between props and state</AccordionHeader>
        <AccordionBody>
        Props stand for properties. Props are used to pass data from a parent component to a child component. They are read only that means child component can't update or modify the passed data through props. Props are passed down the component tree, and any changes to them in the parent component will trigger re-render of the child component. State is used to manage data within a component. State is private to a component, meaning that it can only be accessed and modified within that component. When the state of a component changes, React will automatically re-render the component to reflect those changes. In summary, props are used to pass data from parent to child components, while state is used to manage data that changes within a component. Both props and state are important tools for building React applications, and understanding the differences between them is essential for writing efficient and effective code.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          How does useState work?
        </AccordionHeader>
        <AccordionBody>
        useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          Purpose of useEffect othe then fetching data.
        </AccordionHeader>
        <AccordionBody>
        There are several other purpose of useEffect hook rather than fetching data. useEffect can be used to update the document title needs to change based on the current page or state. This can be used to manage subscriptions to external data sources, such as web sockets or event streams. this can also be used to trigger animations when certain conditions are met. For managing timers and intervals that can be used, ensuring that they are cleaned up properly when the component is unmounted.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          How does react work?
        </AccordionHeader>
        <AccordionBody>
        React is a JavaScript library for building user interfaces. When a React application is loaded, it typically consists of a hierarchy of components, each representing a part of the UI. Components can be nested inside other components, creating a tree like structure known as the component tree. Each component can have its own state and can render a view based on that state. When the state of a component changes, React will automatically re-render that component and any child components that depend on its state. This is done efficiently using a process called reconciliation, where React compares the new component tree with the previous one and determines what changes need to be made to update the UI. React also provides a number of other features that make it easier to build complex UIs, such as hooks for managing state and side effects, a virtual DOM for efficient rendering, and tools for testing and debugging.
        </AccordionBody>
      </Accordion>
    </div>
  );
}