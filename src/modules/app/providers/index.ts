import compose from "compose-function"

import { withToastify } from "./withToastify"
import { withRouter } from "./withRouter"

export const withProviders = compose(withRouter, withToastify)
