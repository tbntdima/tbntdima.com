/** @jsx jsx */
import { jsx } from "theme-ui"

function SvgComponent(props) {
  return (
    <svg
      alt="netlify"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <g clipPath="url(#prefix__clip0)">
        <path
          d="M17.394 8.328l-.01-.004a.037.037 0 01-.014-.008.07.07 0 01-.017-.058l.484-2.958 2.272 2.27-2.363 1.004a.052.052 0 01-.02.003h-.01a1.076 1.076 0 00-.323-.25zm3.294-.18l2.43 2.426c.503.505.756.756.848 1.048.014.043.025.086.034.13l-5.804-2.455-.01-.004c-.023-.009-.05-.02-.05-.043 0-.024.028-.035.05-.045l.008-.003 2.494-1.054zm3.213 4.383c-.125.236-.37.48-.783.893l-2.739 2.735-3.541-.736-.019-.004c-.031-.005-.065-.011-.065-.04a1.066 1.066 0 00-.41-.746c-.014-.014-.01-.037-.006-.057l.001-.01.666-4.084.003-.014c.003-.031.009-.067.037-.067a1.085 1.085 0 00.727-.417c.006-.006.01-.013.017-.016.02-.01.044 0 .065.008l6.046 2.555h.001zm-4.151 4.257l-4.503 4.498.77-4.732.002-.006c0-.006.002-.012.004-.018.006-.015.022-.021.038-.028l.007-.003a1.16 1.16 0 00.436-.323c.015-.018.033-.035.056-.038a.056.056 0 01.018 0l3.171.65zm-5.456 5.45l-.508.507-5.611-8.1a.25.25 0 00-.006-.01c-.01-.011-.019-.023-.017-.037 0-.01.007-.019.014-.026l.006-.008c.017-.025.032-.05.047-.077l.013-.022.002-.002c.008-.015.017-.03.032-.038.013-.006.031-.003.045 0l6.217 1.28c.018.003.034.01.048.02.008.01.01.018.012.028a1.098 1.098 0 00.644.735c.017.01.01.029.002.05a.157.157 0 00-.01.027c-.078.476-.75 4.568-.93 5.673zm-1.06 1.059c-.375.37-.595.565-.845.644-.245.078-.51.078-.755 0-.292-.092-.545-.344-1.05-.848l-5.634-5.63 1.471-2.28a.093.093 0 01.026-.03c.015-.01.038-.005.057 0 .337.103.7.084 1.026-.051.017-.006.034-.01.047.001a.12.12 0 01.018.02l5.638 8.174zM4.405 16.92L3.114 15.63l2.552-1.088a.051.051 0 01.021-.005c.021 0 .034.022.045.041.026.04.053.078.082.115l.008.01c.007.01.002.022-.005.032l-1.41 2.186zm-1.864-1.863L.906 13.425a9.494 9.494 0 01-.62-.653l4.973 1.03.018.003c.031.005.065.01.065.04s-.037.045-.068.057l-.015.006-2.717 1.15zM0 11.932c.006-.106.025-.21.056-.31.093-.292.345-.543.85-1.048L3 8.484c.964 1.396 1.93 2.792 2.899 4.185.017.022.035.048.016.066-.091.101-.183.211-.247.33a.1.1 0 01-.032.04c-.008.005-.017.003-.026 0h-.001L0 11.932zm3.56-4.008l2.813-2.811c.265.116 1.227.522 2.088.885.652.275 1.246.526 1.433.607.018.007.035.015.043.034.005.011.003.025 0 .037a1.253 1.253 0 00.328 1.145c.019.018 0 .045-.016.068l-.009.013-2.857 4.421a.087.087 0 01-.027.032c-.015.01-.036.005-.054 0a1.426 1.426 0 00-.34-.046c-.103 0-.215.019-.327.04h-.001c-.013.001-.024.004-.034-.004a.13.13 0 01-.028-.032l-3.013-4.39zm3.382-3.379l3.643-3.64c.504-.503.757-.755 1.049-.847.246-.078.51-.078.755 0 .293.092.545.344 1.05.848l.789.789-2.591 4.008a.097.097 0 01-.026.03c-.015.01-.037.006-.056 0a1.315 1.315 0 00-1.203.232c-.017.017-.042.007-.064-.002-.338-.147-2.97-1.258-3.346-1.418zm7.836-2.3l2.393 2.389-.577 3.567v.009a.084.084 0 01-.005.024c-.006.012-.019.015-.031.018a1.147 1.147 0 00-.356.182c-.007.007-.014.014-.025.016a.072.072 0 01-.027-.005l-3.646-1.547-.007-.003c-.023-.01-.05-.02-.05-.045a1.375 1.375 0 00-.195-.572c-.017-.03-.037-.06-.022-.089l2.548-3.945zM12.314 7.63l3.418 1.446c.019.008.04.017.047.036a.065.065 0 010 .036.851.851 0 00-.018.164v.096c0 .024-.025.034-.047.043l-.007.003c-.542.23-7.601 3.238-7.612 3.238-.01 0-.022 0-.032-.011-.02-.019 0-.045.017-.069l.008-.012 2.809-4.344.005-.008c.016-.026.035-.056.065-.056l.028.005c.064.009.12.017.178.017.426 0 .82-.207 1.059-.562a.102.102 0 01.02-.025c.018-.012.043-.006.062.003zM8.4 13.38l7.695-3.278s.012 0 .022.01c.042.043.078.07.112.097l.017.01c.016.01.032.02.033.036l-.001.015-.66 4.045-.002.016c-.005.032-.009.067-.038.067a1.083 1.083 0 00-.86.53l-.004.005c-.009.015-.017.029-.031.036-.013.007-.03.004-.044 0l-6.136-1.264c-.007 0-.096-.324-.103-.325z"
          sx={{ fill: "textReverse" }}
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path d="M0 0h24v24H0z" sx={{ fill: "textReverse" }} />
        </clipPath>
      </defs>
    </svg>
  )
}

export default SvgComponent
