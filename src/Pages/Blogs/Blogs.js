import React from 'react';

const Blogs = () => {
    return (
        <div className='p-12 bg-slate-300'>
            <div className='text-center text-4xl text-ellipsis font-sans font-bold text-pink-500'>Blogs Section</div>
            <div className="divider"></div> 
            <div className="accordion" id="accordionExample">
              
  <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
  <div className="accordion-item bg-white bg-green-50 border border-gray-300 mb-4 rounded-xl">
    <h2 className="accordion-header mb-0" id="headingOne">
      <button className="
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
        text-xl
        font-bold
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
        aria-controls="collapseOne">
        How can we improve the performance of a React Application?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
      data-bs-parent="#accordionExample">
      <div className="accordion-body py-4 px-5">
      <ul>
                    <li>1) Keeping component state local where necessary</li>
                    <li>2) Audit and Trim out our Javascript bundles to eliminate any code redundancy </li>
                    <li>3) Memoizing React components to prevent unnecessary re-renders</li>
                    <li>4) Code-splitting in React using dynamic import()</li>
                    <li>5) Avoid Inline Function Definition in the Render Function.</li>
                    <li>6) Enable Gzip Compression on Web Server</li>
                    <li>7) Avoid using Index as Key for map</li>
                    </ul> 
      </div>
    </div>
  </div>

  <div className="accordion-item bg-white border bg-red-50  border-gray-300 mb-4 rounded-xl">
    <h2 className="accordion-header mb-0" id="headingTwo">
      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
        text-xl
        font-bold
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
        aria-controls="collapseTwo">
        What are the different ways to manage a state in a React application?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
      data-bs-parent="#accordionExample">
      <div className="accordion-body py-4 px-5">
      Some ways to manage a state in a React application: <br />
      1. Local (UI) state: Local state is data we manage in one or another component. Local state is most often managed in React using the useState hook. <br />
      2. Global (UI) state: Global state is data we manage across multiple components.
      </div>
    </div>
  </div>

  <div className="accordion-item bg-white border bg-orange-50  border-gray-300 mb-4 rounded-xl">
    <h2 className="accordion-header mb-0" id="headingThree">
      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
        text-xl
        font-bold
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
        aria-controls="collapseThree">
      What is prototypal inheritance and how does it work?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
      data-bs-parent="#accordionExample">
      <div className="accordion-body py-4 px-5">
       Protoypical inheritance is a method by which an object can inherit the properties and methods of another object. It allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.
       Traditionally, in order to get and set the [Prototype] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf.
      </div>
    </div>
  </div>

  <div className="accordion-item bg-white border bg-purple-50  border-gray-300 mb-4 rounded-xl">
    <h2 className="accordion-header mb-0" id="headingThree">
      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
        text-xl
        font-bold
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
        aria-controls="collapseThree">
        Why do we not set the state directly in React?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
      data-bs-parent="#accordionExample">
      <div className="accordion-body py-4 px-5">
      Directly modifying state is not recommended as react will not come to know of the change and it will not cause a rerender. All the diffing happens on Virtual DOM and react only updates the change attributes to Browser. When we update the state of a component all its children get rendered as well. But when we say our entire component tree is rendered that doesn’t mean that the entire DOM is updated. When a component is rendered we basically get a react element, so that is updating our virtual dom. React will then look at the virtual DOM, it also has a copy of the old virtual DOM, that is why we shouldn’t set the state directly in React.
      </div>
    </div>
  </div>

  <div className="accordion-item bg-white border bg-cyan-50 border-gray-300 mb-4 rounded-xl">
    <h2 className="accordion-header mb-0" id="headingThree">
      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
        text-xl
        font-bold
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
        aria-controls="collapseThree">
        What is a unit test? Why should we write unit tests?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
      data-bs-parent="#accordionExample">
      <div className="accordion-body py-4 px-5">
      Unit testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit testing is done during the development phase of an application by the developers. Unit tests help to fix bugs early in the development cycle and save costs.
    It helps the developers understand the testing code base and enables them to make changes quickly.
    Good unit tests serve as project documentation.
    Unit tests help with code re-use. Migrate both our code and our tests to our new project. They also tweak the code until the tests run again.
      </div>
    </div>
  </div>
  </div>
</div>
        </div>
       


    );
};

export default Blogs;