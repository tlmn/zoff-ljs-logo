import React from "react";

export default ({ height = "200", fillColor = "#252525", ...props }) => (
  <svg height={height} viewBox="0 0 748 548" {...props}>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M177.527 75.9381L651.569 0.544678L674.4 148.797L641.978 153.953L641.961 124.28L610.988 129.741L611.004 158.88L603.494 160.074L611.005 160.118L611.012 173.928C605.301 166.995 596.891 164.334 586.177 166.224C561.734 170.534 549.549 194.433 550.382 217.762C551.334 241.762 566.271 260.878 589.374 256.805C598.917 255.122 606.136 250.051 611.101 242.962L611.06 250.564L642.032 245.103L641.982 160.297L709.662 160.689L710.393 265.138L741.89 263.644L747.069 413.555L521.575 424.247L509.165 547.455L20.5512 504.572L35.5845 355.327L53.2427 356.877L51.5151 306.868L1.98094 306.581L0.930664 156.585L190.116 157.68L177.527 75.9381ZM260.822 203.598L229.85 209.059L229.828 153.133L229.729 83.0656L260.701 77.6044L260.721 148.204L260.822 203.598ZM310.172 84.4174C310.289 93.891 303.138 103.265 293.428 104.977C283.885 106.66 275.969 99.9426 275.852 90.469C275.715 81.862 282.384 71.7098 292.763 69.8795C302.474 68.1674 310.085 75.1112 310.172 84.4174ZM308.473 195.195L277.501 200.657L277.473 114.35L308.446 108.889L308.473 195.195ZM356.04 108.955C361.054 101.166 368.578 95.8692 378.121 94.1866C395.198 91.1755 408.796 101.724 408.871 127.605L408.864 177.494L377.892 182.955L377.82 136.532C377.831 128.762 373.833 125.67 367.471 126.791C360.272 128.061 356.549 133.378 356.203 141.207L356.128 186.793L325.156 192.254L325.128 105.947L356.101 100.486L356.04 108.955ZM472.823 79.9048L508.316 73.6465L482.774 121.651L510.185 159.628L477.203 165.444L455.828 133.307L455.774 169.222L424.802 174.684L424.73 53.8604L455.702 48.3992L455.791 114.498L472.823 79.9048ZM586.176 123.097C586.163 142.606 568.948 151.683 552.206 154.635C533.79 157.883 519.374 155.419 510.069 140.833L534.14 123.642C538.029 130.034 543.524 131.827 548.881 130.882C552.062 130.321 554.928 128.953 554.958 126.185C554.996 123.012 550.009 122.421 543.468 121.644C531.11 120.178 513.203 118.053 513.148 96.6163C513.052 77.4721 530.258 67.3608 545.66 64.6449C560.895 61.9586 575.322 65.4566 583.405 78.0137L560.664 93.9345C557.484 88.6261 553.752 87.04 549.34 87.4727C546.632 87.7776 544.189 89.5893 544.13 92.1891C544.048 96.3154 549.508 96.8112 556.519 97.4478C568.934 98.5752 586.211 100.144 586.176 123.097ZM104.343 229.433C104.207 220.826 110.875 210.674 121.255 208.844C130.965 207.132 138.577 214.076 138.664 223.382C138.781 232.855 131.63 242.23 121.92 243.942C112.377 245.624 104.46 238.907 104.343 229.433ZM95.0794 350.177C102.564 349.547 105.942 346.19 105.992 339.621L105.965 253.315L136.937 247.853L136.964 334.16C137.069 363.142 123.684 375.342 95.1246 378.824L95.0794 350.177ZM205.549 281.328L205.624 235.742L236.596 230.281L236.624 316.587L205.651 322.049L205.712 313.579C200.698 321.368 193.173 326.665 183.631 328.348C166.554 331.359 152.956 320.81 152.881 294.93L152.888 245.041L183.86 239.58L183.932 286.002C183.921 293.772 187.919 296.865 194.281 295.743C201.48 294.474 205.203 289.157 205.549 281.328ZM311.313 226.946L311.305 217.108L342.277 211.647L342.364 295.353C342.242 324.03 321.727 338.868 298.456 342.971C279.872 346.248 263.535 341.706 255.511 329.483L279.897 310.165C284.279 315.435 289.547 316.922 296.913 315.624C304.28 314.325 311.253 309.815 311.392 300.814L311.353 293.744C306.606 300.105 299.771 304.417 290.563 306.041C265.115 310.528 251.489 291.007 250.556 269.076C249.683 247.48 261.671 223.443 287.286 218.926C297.666 217.096 305.662 220.347 311.313 226.946ZM281.558 263.782C281.616 272.921 287.563 278.26 296.604 276.665C305.309 275.13 311.14 268.06 311.338 259.394L311.437 257.996C311.074 249.084 305.353 244.051 296.48 245.615C287.439 247.209 281.5 254.644 281.558 263.782ZM355.109 250.813C354.817 225.662 372.054 203.979 397.166 199.551C423.618 194.887 442.09 212.517 442.067 236.861C442.096 239.963 441.771 243.991 440.805 248.304L386.227 257.928C389.614 264.408 396.409 264.764 402.603 263.671C408.798 262.579 413.555 260.187 417.061 255.598L438.163 270.521C429.929 280.604 419.115 286.826 404.215 289.453C373.075 294.944 355.293 276.329 355.109 250.813ZM400.363 224.536C393.667 225.717 388.171 229.793 385.728 237.474L413.352 232.603C411.521 225.158 406.558 223.443 400.363 224.536ZM485.536 194.845C490.55 187.056 498.075 181.758 507.617 180.076C524.694 177.065 538.292 187.614 538.368 213.494L538.361 263.383L507.388 268.844L507.316 222.421C507.327 214.652 503.329 211.559 496.967 212.681C489.768 213.95 486.045 219.267 485.699 227.096L485.624 272.682L454.652 278.143L454.625 191.837L485.597 186.375L485.536 194.845ZM581.246 212.665C581.304 221.804 586.7 227.93 596.243 226.248C605.283 224.654 610.75 217.475 611.056 208.445L611.096 206.712C610.762 197.967 605.593 192.146 596.218 193.799C586.842 195.452 581.129 203.192 581.246 212.665ZM280.37 457.24C297.112 454.288 314.327 445.21 314.34 425.702C314.375 402.748 297.098 401.18 284.683 400.052C277.672 399.415 272.212 398.92 272.294 394.793C272.354 392.194 274.796 390.382 277.504 390.077C281.916 389.644 285.648 391.23 288.828 396.539L311.569 380.618C303.486 368.061 289.059 364.563 273.824 367.249C258.422 369.965 241.216 380.076 241.312 399.221C241.367 420.658 259.274 422.782 271.632 424.249C278.173 425.025 283.16 425.616 283.122 428.79C283.092 431.557 280.226 432.925 277.045 433.486C271.688 434.431 266.193 432.638 262.304 426.246L238.233 443.437C247.538 458.023 261.955 460.487 280.37 457.24ZM368.223 441.749C397.186 436.642 411.439 412.724 411.511 390.615C411.514 367.138 392.649 346.297 364.858 351.198C335.727 356.334 321.306 380.282 321.402 402.361C321.398 425.838 339.427 446.826 368.223 441.749ZM365.873 411.782C357.67 413.228 351.752 408.057 351.724 399.086C351.695 390.114 357.664 382.848 365.868 381.401C374.071 379.955 379.822 385.155 379.85 394.126C379.878 403.098 374.077 410.335 365.873 411.782ZM424.768 429.362L455.74 423.901L455.64 368.506L455.62 297.907L424.648 303.369L424.746 373.436L424.768 429.362ZM488.347 325.28C498.057 323.568 505.208 314.194 505.091 304.72C505.003 295.414 497.392 288.47 487.682 290.182C477.302 292.013 470.633 302.165 470.77 310.772C470.887 320.246 478.804 326.963 488.347 325.28ZM472.419 420.96L503.391 415.498L503.364 329.192L472.392 334.653L472.419 420.96ZM576.765 281.725L576.788 325.912C571.077 318.978 562.668 316.318 551.953 318.208C527.51 322.518 515.325 346.417 516.159 369.746C517.111 393.746 532.047 412.862 555.151 408.789C564.693 407.106 571.913 402.035 576.877 394.945L576.836 402.548L607.809 397.087L607.737 276.264L576.765 281.725ZM562.019 378.232C552.476 379.914 547.08 373.788 547.023 364.649C546.906 355.176 552.619 347.436 561.994 345.783C571.369 344.13 576.539 349.951 576.872 358.696L576.833 360.429C576.526 369.459 571.059 376.638 562.019 378.232ZM194.586 349.907L194.591 373.854L182.054 376.064L182.005 450.638L194.542 448.427L194.546 472.374L157.596 478.89L157.636 356.422L194.586 349.907ZM223.598 396.497L206.443 399.522L203.755 361.897L226.189 357.941L223.598 396.497ZM670.342 265.472L633.391 271.987L633.396 295.934L645.932 293.724L645.883 368.297L633.347 370.508L633.351 394.455L670.301 387.939L670.342 265.472Z"
      fill={fillColor}
    />
  </svg>
);