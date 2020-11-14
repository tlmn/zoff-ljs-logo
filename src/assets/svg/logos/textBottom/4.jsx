import React from "react";

export default ({ height = "200", fillColor = "#252525", ...props }) => (
  <svg height={height} viewBox="0 0 666 462">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M125.002 39.1686L583.293 0.814453L593.654 132.41L633.157 133.166L632.588 223.074L657.458 221.297L665.839 364.408L579.597 370.571L580.58 448.587L85.6527 461.186L84.9562 405.921L8.54152 411.382L0.160645 268.27L45.4809 265.031L46.3872 121.942L131.648 123.573L125.002 39.1686ZM217.581 177.939L188.22 183.122L188.199 130.051L188.106 63.56L217.468 58.3776L217.487 125.373L217.581 177.939ZM264.366 64.8427C264.477 73.8329 257.698 82.7285 248.493 84.3533C239.446 85.95 231.941 79.5756 231.83 70.5855C231.701 62.4179 238.022 52.7839 247.863 51.047C257.068 49.4222 264.284 56.0116 264.366 64.8427ZM262.756 169.966L233.393 175.148L233.368 93.2477L262.729 88.0653L262.756 169.966ZM307.85 88.1281C312.603 80.7368 319.736 75.7101 328.783 74.1134C344.971 71.256 357.863 81.2664 357.934 105.825L357.927 153.168L328.566 158.351L328.497 114.297C328.507 106.924 324.718 103.989 318.686 105.054C311.862 106.258 308.332 111.304 308.004 118.734L307.933 161.992L278.57 167.174L278.545 85.2738L307.907 80.0913L307.85 88.1281ZM418.561 60.5606L452.207 54.6217L427.993 100.176L453.979 136.215L422.713 141.733L402.449 111.237L402.398 145.319L373.036 150.501L372.968 35.8456L402.33 30.6631L402.414 93.3878L418.561 60.5606ZM526.02 101.549C526.008 120.061 509.688 128.675 493.816 131.477C476.358 134.558 462.69 132.22 453.87 118.378L476.689 102.065C480.376 108.13 485.585 109.832 490.664 108.936C493.68 108.403 496.397 107.105 496.424 104.479C496.46 101.468 491.733 100.906 485.533 100.17C473.817 98.7782 456.841 96.7619 456.789 76.419C456.698 58.252 473.009 48.6569 487.611 46.0796C502.054 43.5304 515.73 46.8499 523.393 58.766L501.835 73.8741C498.82 68.8366 495.282 67.3316 491.099 67.7422C488.532 68.0315 486.216 69.7507 486.16 72.2178C486.082 76.1335 491.258 76.604 497.905 77.2081C509.674 78.2779 526.053 79.7667 526.02 101.549ZM69.2388 202.457C69.1092 194.289 75.4309 184.654 85.2711 182.918C94.4765 181.293 101.692 187.882 101.775 196.713C101.886 205.704 95.1067 214.599 85.9014 216.224C76.8547 217.821 69.3496 211.446 69.2388 202.457ZM60.4565 317.036C67.5518 316.438 70.7545 313.253 70.802 307.019L70.7761 225.119L100.138 219.936L100.164 301.837C100.263 329.34 87.5738 340.917 60.4994 344.221L60.4565 317.036ZM165.182 251.702L165.254 208.443L194.616 203.26L194.641 285.162L165.28 290.344L165.337 282.307C160.584 289.699 153.45 294.725 144.404 296.322C128.215 299.179 115.324 289.168 115.252 264.609L115.259 217.267L144.621 212.085L144.689 256.138C144.679 263.511 148.469 266.446 154.5 265.382C161.325 264.177 164.854 259.131 165.182 251.702ZM265.448 200.096L265.439 190.76L294.802 185.577L294.884 265.011C294.768 292.224 275.32 306.305 253.258 310.198C235.642 313.308 220.154 308.998 212.547 297.4L235.665 279.068C239.819 284.068 244.813 285.48 251.797 284.247C258.78 283.014 265.39 278.735 265.522 270.194L265.486 263.484C260.985 269.52 254.505 273.612 245.776 275.153C221.652 279.411 208.733 260.888 207.85 240.075C207.021 219.581 218.386 196.771 242.669 192.485C252.51 190.748 260.09 193.833 265.448 200.096ZM237.239 235.052C237.294 243.724 242.933 248.79 251.503 247.278C259.756 245.821 265.284 239.112 265.472 230.888L265.565 229.561C265.22 221.104 259.798 216.327 251.385 217.812C242.815 219.324 237.185 226.38 237.239 235.052ZM306.967 222.744C306.69 198.877 323.03 178.302 346.837 174.1C371.914 169.673 389.425 186.404 389.404 209.504C389.431 212.448 389.122 216.27 388.207 220.363L336.467 229.496C339.678 235.645 346.119 235.983 351.991 234.947C357.863 233.91 362.373 231.64 365.698 227.285L385.702 241.446C377.896 251.015 367.645 256.919 353.519 259.412C323.999 264.623 307.14 246.958 306.967 222.744ZM349.868 197.809C343.519 198.929 338.31 202.797 335.993 210.086L362.181 205.464C360.446 198.399 355.74 196.772 349.868 197.809ZM430.613 169.633C435.366 162.242 442.499 157.215 451.546 155.618C467.735 152.761 480.626 162.771 480.697 187.33L480.69 234.673L451.328 239.855L451.26 195.802C451.271 188.429 447.48 185.494 441.449 186.559C434.625 187.763 431.095 192.809 430.767 200.238L430.696 243.497L401.333 248.679L401.308 166.779L430.669 161.596L430.613 169.633ZM549.564 149.784L549.542 107.852L578.904 102.67L578.972 217.326L549.61 222.508L549.648 215.294C544.942 222.021 538.099 226.833 529.052 228.43C507.149 232.296 492.99 214.155 492.087 191.38C491.296 169.242 502.848 146.563 526.02 142.473C536.178 140.68 544.151 143.205 549.564 149.784ZM521.346 186.544C521.401 195.216 526.516 201.03 535.563 199.433C544.134 197.921 549.315 191.108 549.606 182.539L549.643 180.894C549.328 172.596 544.427 167.072 535.539 168.64C526.651 170.209 521.235 177.554 521.346 186.544ZM236.114 418.634C251.985 415.832 268.305 407.219 268.317 388.706C268.35 366.924 251.972 365.435 240.202 364.365C233.556 363.761 228.38 363.291 228.458 359.375C228.513 356.908 230.829 355.189 233.397 354.9C237.579 354.489 241.117 355.994 244.132 361.031L265.691 345.924C258.027 334.008 244.351 330.688 229.908 333.237C215.307 335.815 198.995 345.409 199.086 363.576C199.138 383.92 216.115 385.936 227.83 387.327C234.031 388.064 238.758 388.625 238.723 391.636C238.694 394.263 235.977 395.561 232.962 396.093C227.882 396.99 222.674 395.288 218.987 389.223L196.167 405.536C204.988 419.378 218.655 421.716 236.114 418.634ZM319.398 403.934C346.855 399.088 360.368 376.39 360.436 355.411C360.439 333.132 342.554 313.355 316.208 318.005C288.591 322.879 274.921 345.605 275.011 366.557C275.008 388.836 292.1 408.752 319.398 403.934ZM317.171 375.496C309.394 376.869 303.784 371.962 303.757 363.449C303.73 354.935 309.389 348.039 317.165 346.667C324.943 345.294 330.394 350.229 330.42 358.742C330.448 367.256 324.948 374.124 317.171 375.496ZM373.004 392.179L402.366 386.997L402.27 334.43L402.251 267.435L372.889 272.617L372.983 339.108L373.004 392.179ZM433.276 293.41C442.481 291.786 449.261 282.89 449.15 273.9C449.067 265.069 441.852 258.479 432.646 260.104C422.806 261.841 416.484 271.475 416.614 279.643C416.725 288.633 424.229 295.008 433.276 293.41ZM418.177 384.206L447.539 379.023L447.513 297.123L418.151 302.305L418.177 384.206ZM517.097 252.079L517.12 294.01C511.706 287.43 503.733 284.906 493.575 286.699C470.404 290.789 458.852 313.468 459.642 335.607C460.545 358.381 474.705 376.522 496.607 372.656C505.654 371.06 512.497 366.248 517.204 359.52L517.165 366.734L546.527 361.551L546.459 246.896L517.097 252.079ZM503.118 343.659C494.072 345.256 488.957 339.442 488.902 330.77C488.791 321.78 494.207 314.436 503.094 312.867C511.983 311.298 516.883 316.821 517.2 325.12L517.162 326.764C516.872 335.334 511.689 342.146 503.118 343.659ZM154.79 316.78L154.795 339.505L142.91 341.603L142.863 412.37L154.748 410.272L154.752 432.997L119.723 439.179L119.761 322.964L154.79 316.78ZM182.294 360.992L166.03 363.863L163.482 328.159L184.75 324.405L182.294 360.992ZM605.81 236.655L570.781 242.839L570.785 265.563L582.67 263.465L582.622 334.233L570.738 336.33L570.742 359.054L605.771 352.872L605.81 236.655Z"
      fill={fillColor}
    />
  </svg>
);
