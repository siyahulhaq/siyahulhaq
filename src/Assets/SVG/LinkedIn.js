import React from "react";

function LinkedIn({ color,link }) {
  return (
    <a href={link}>
    <div className="icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16.502"
        height="15.772"
        viewBox="0 0 16.502 15.772"
        fill={color}
      >
        <g
          id="Linkedin_icon"
          data-name="Linkedin icon"
          transform="translate(0 -9.708)"
        >
          <g id="Group_8" data-name="Group 8" transform="translate(0 9.708)">
            <rect
              id="Rectangle_15"
              data-name="Rectangle 15"
              width="3.545"
              height="10.647"
              transform="translate(0.204 5.125)"
            />
            <path
              id="Path_149"
              data-name="Path 149"
              d="M161.277,140.551a3.816,3.816,0,0,0-2.954-1.22,4.259,4.259,0,0,0-1.23.167,2.792,2.792,0,0,0-.935.467,4,4,0,0,0-1.026,1.127v-1.514H151.6l.011.516q.011.516.011,3.18t-.022,6.951h3.535v-5.941a2.6,2.6,0,0,1,.118-.87,2.282,2.282,0,0,1,.682-.918,1.739,1.739,0,0,1,1.134-.371,1.529,1.529,0,0,1,1.359.639,3.108,3.108,0,0,1,.435,1.767v5.694h3.535v-6.1A5.115,5.115,0,0,0,161.277,140.551Z"
              transform="translate(-145.892 -134.453)"
            />
            <path
              id="Path_150"
              data-name="Path 150"
              d="M2,9.708a2.023,2.023,0,0,0-1.445.521A1.73,1.73,0,0,0,0,11.545a1.761,1.761,0,0,0,.537,1.311,1.939,1.939,0,0,0,1.418.526h.021a2.024,2.024,0,0,0,1.456-.526,1.7,1.7,0,0,0,.543-1.311,1.792,1.792,0,0,0-.548-1.316A1.964,1.964,0,0,0,2,9.708Z"
              transform="translate(0 -9.708)"
            />
          </g>
        </g>
      </svg>
    </div>
    </a>
  );
}

export default LinkedIn;
