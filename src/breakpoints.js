const breakpoints = {
    xs: "375px",
    sm: "495px",
    md: "660px",
    lg: "1200px",
}

const devices = {
    xs: `(max-width: ${breakpoints.xs})`,
    sm: `(max-width: ${breakpoints.sm})`,
    md: `(max-width: ${breakpoints.md})`,
    lg: `(max-width: ${breakpoints.lg})`,
}

export {
    devices,
}