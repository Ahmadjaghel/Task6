import Example from "./Example";
import imag1 from "/public/image/Image.png";
import imag2 from "/public/image/Image2.png";
import imag3 from "/public/image/Image15.png";
import imag4 from "/public/image/Image16.png";
import imag5 from "/public/image/Image17.png";
import data from "../../data.json";
import Subscribe from "./Subscribe";
// import { useEffect } from "react";
const BlogItem = ({ id }) => {
  let blog = data[id - 1];
  console.log(blog);
  // const blog = data[id - 1];
  const color = ["text-ultraPink", "text-govern", "text-magPink"];
  const bg = ["bg-blurmagent", "bg-balBlue", "bg-magenta"];
  return (
    <div className="flex flex-col w-[327px] sm:w-auto dark:text-white">
      <h6 className="text-[#6941C6] font-[600] text-[14px] mb-8">
        {blog.date}
      </h6>
      <h1 className="text-[#1A1A1A] font-[700] text-[36px] mb-8 dark:text-white">
        {blog.title}
      </h1>
      <img src={blog.imag} alt="blog" className="mb-8 " />
      <p className="font-[400] text-[16px] text-[#667085] dark:text-white mb-3">
        A grid system is a design tool used to arrange content on a webpage. It
        is a series of vertical and horizontal lines that create a matrix of
        intersecting points, which can be used to align and organize page
        elements. Grid systems are used to create a consistent look and feel
        across a website, and can help to make the layout more visually
        appealing and easier to navigate.
      </p>
      <p className="font-[400] text-[16px] text-[#667085] mb-3 dark:text-white">
        f you’ve been to New York City and have walked the streets, it is easy
        to figure out how to get from one place to another because of the grid
        system that the city is built on. Just as the predictability of a city
        grid helps locals and tourists get around easily, so do webpage grids
        provide a structure that guides users and designers alike. Because of
        their consistent reference point, grids improve page readability and
        scannability and allow people to quickly get where they need to go.
      </p>
      <p className="text-center px-[105.5px] mb-3 font-[700] text-[16px] dark:text-white text-[#667085]">
        Definition: A grid is made up of columns, gutters, and margins that
        provide a structure for the layout of elements on a page.
      </p>
      <img src={imag1} alt="" />
      <p className="text-center font-[400] text-[16px] px-[105.5px] mt-3 dark:text-white text-[#667085]">
        Definition: A grid is made up of columns, gutters, and margins that
        provide a structure for the layout of elements on a page.
      </p>
      <p className="font-[400] text-[16px] text-[#667085] dark:text-white mb-3">
        There are three common grid types used in websites and interfaces:
        column grid, modular grid.<br></br> and hierarchical grid Column grid
        involves dividing a page into vertical columns. UI elements and content
        are then aligned to these columns.<br></br>
        Modular grid extends the column grid further by adding rows to it. This
        intersection of columns and rows make up modules to which elements and
        content are aligned. Modular grids are great for ecommerce and listing
        pages, as rows are repeatable to accommodate browsing.<br></br>
        Hierarchical grid: Content is organized by importance using columns,
        rows, and modules. The most important elements and pieces of content
        take up the biggest pieces of the grid.
      </p>
      <h3 className="font-[700] text-[18px] text-[#667085] dark:text-white mb-3">
        {" "}
        Breaking Down the Grid
      </h3>
      <p className="font-[400] text-[16px] text-[#667085] dark:text-white mb-3">
        Regardless of the type of grid you are using, the grid is made up of
        three elements: columns, gutters, and margins.
      </p>
      <p className="font-[400] text-[16px] text-[#667085] dark:text-white mb-3">
        <span className="font-[500] text-[16px] text-[#667085] dark:text-white">
          Columns:
        </span>{" "}
        Columns take up most of the real estate in a grid. Elements and content
        are placed in columns. To adapt to any screen size, column widths are
        generally defined with percentages rather than fixed values and the
        number of columns will vary. For example, a grid on a mobile device
        might have 4 columns and a grid on a desktop might have 12 columns.
      </p>
      <p className="font-[400] text-[16px] text-[#667085] mb-3 dark:text-white">
        <span className="font-[500] text-[16px] text-[#667085] dark:text-white">
          Gutters:{" "}
        </span>{" "}
        The gutter is the space between columns that separates elements and
        content from different columns. Gutter widths are fixed values but can
        change based on different breakpoints. For example, wider gutters are
        appropriate for larger screens, whereas smaller gutters are appropriate
        for smaller screens like mobile.
      </p>
      <img src={imag2} alt="" />
      <p className="text-center font-[400] text-[16px] px-[105.5px] mt-3 dark:text-white text-[#667085]">
        Three elements make up any grid: (1) columns, (2) gutters, and (3)
        margins.
      </p>
      <h1 className="font-[700] text-[18px] text-[#667085] dark:text-white my-3">
        Examples of Grids in Use
      </h1>
      <div>
        {blog.sections.map((item, index) => (
          <Example key={index} item={item} index={index} />
        ))}
      </div>
      <h3 className="font-[700] text-[16px] text-[#667085] dark:text-white mb-3">
        Benefits of the Grid
      </h3>
      <p className="font-[400] text-[16px] text-[#667085] dark:text-white mb-3">
        Using a grid benefits both end users and the designers alike:
      </p>
      <ul
        style={{ listStyle: "inherit" }}
        className="font-[400] text-[16px] text-[#667085] dark:text-white mb-3"
      >
        <li>Designers can quickly put together well-aligned interfaces.</li>
        <li>Users can easily scan predictable grid-based interfaces.</li>
        <li>
          A good grid is easy to adapt to various screen sizes and orientations.
          In fact, grid layouts are an essential component of responsive web
          design. Responsive design uses breakpoints to determine the screen
          size threshold at which the layout should change. For example, a
          desktop screen may have 12 grid columns, which may be stacked on
          mobile so that the resulting layout has only 4 columns.
        </li>
      </ul>
      <img src={imag3} alt="" />
      <p className="text-center font-[400] text-[16px] px-[105.5px] mt-3 dark:text-white  text-[#667085]">
        At the mobile size, Behance’s one-column grid (left) was reflowed into a
        four-column grid structure (right).
      </p>
      <p className="font-[400] text-[16px] text-[#667085] dark:text-white mb-3">
        Even more importantly, the grid is not a throw-away concept. It is used
        by both designers and developers alike. Be sure to communicate with your
        developers the grid structure used when creating the design, so they can
        implement it accordingly.
      </p>
      <h3 className="font-[700] text-[18px] text-[#667085] dark:text-white mb-3">
        Choosing and Setting Up Your Grid
      </h3>
      <p className="font-[400] text-[16px] text-[#667085] dark:text-white mb-3">
        How you use and set up a grid is fundamental to creating well thought
        out layouts and experiences for your user.
      </p>
      <p className="font-[400] text-[16px] text-[#667085] dark:text-white mb-3">
        <span className="font-[700] text-[18px] text-[#667085] dark:text-white">
          {" "}
          Choose the right grid for your needs.
        </span>{" "}
        Take time to think through what type of grid ­— column, modular, or
        hierarchical — best suits your needs. A hierarchical grid may be the
        best fit if one item on your page will always be more important than the
        surrounding elements. For example, hierarchical grids are great for
        online news platforms. If the content you need to display is highly
        variable, consider using a basic column or modular grid, as these
        provide lots of flexibility when designing. For example, elements and
        content can span across multiple columns or modules or just one to fit
        design needs.
      </p>
      <p className="font-[400] text-[16px] text-[#667085] dark:text-white mb-3">
        <span className="font-[700] text-[18px] text-[#667085] dark:text-white">
          {" "}
          Spend time setting up your grid.
        </span>{" "}
        Once you have figured out what type of grid will work well for your
        needs, start setting it up. Determine the number of columns and the
        margin and gutter sizes relative to your screen sizes. You will most
        likely want to prepare for mobile, tablet, and desktop screens. A
        12-column grid at laptop or desktop size is generally flexible enough
        for most design needs. The number of columns will decrease as your
        device size decreases. Wireframing tools like Sketch and Figma have
        quick and easy ways to set up and edit your grid, even after you have
        started designing.
      </p>
      <img src={imag4} alt="" />
      <p className="text-center font-[400] text-[16px] px-[105.5px] my-3  text-[#667085] dark:text-white">
        Easily set the number of columns, the gutter size, and margin size in
        Figma.
      </p>
      <p className="font-[400] text-[16px] text-[#667085] dark:text-white mb-3">
        <span className="font-[700] text-[18px] text-[#667085] dark:text-white ">
          {" "}
          Always place content within columns,
        </span>{" "}
        not gutters. The gutters should remain empty as you place elements on
        the grid in order to clearly separate and align content and elements.
      </p>
      <img src={imag5} alt="" />
      <p className="text-center font-[400] text-[16px] px-[105.5px] my-3 dark:text-white text-[#667085]">
        Content or elements should be placed within and across columns, not
        gutters.
      </p>
      <p className="font-[400] text-[16px] dark:text-white text-[#667085] mb-3">
        <span className="font-[700] text-[18px] dark:text-white  text-[#667085] ">
          {" "}
          Consider using an 8px grid system.
        </span>{" "}
        For most common devices, the screen size in pixels is a multiple of 8.
        Keeping grid-component values at a multiple of 8 will generally make it
        easier to scale and implement a grid.
      </p>
      <h3 className="font-[700] text-[18px] dark:text-white text-[#667085] mb-3">
        Conclusion
      </h3>
      <p className="font-[400] text-[16px] dark:text-white text-[#667085] mb-3">
        Grids not only provide designers a structure on which to base layouts,
        but they also improve readability and scannability for end users. Use a
        good grid system that easily adapts to various screen sizes.
      </p>
      <div className="flex gap-2 mb-8">
        {blog.config.map((ele, ind) => (
          <span
            key={ind}
            className={`${color[ind]} ${bg[ind]} font-medium text-sm px-[10px] py-[2px] rounded-xl `}
          >
            {ele}
          </span>
        ))}
      </div>
      <div className="hidden md:block ">
        <Subscribe />
      </div>
    </div>
  );
};

export default BlogItem;
