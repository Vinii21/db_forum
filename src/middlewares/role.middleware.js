const isAdmin = (req, res, next) => {
    const {username, rolId} = req.user;
    // 1 miembro
    // 2 moderador
    // 3 admin
    if(rolId !==3 ){
        return next({
            status:401,
            name: "Not Admin",
            message: `Sorry ${username} Only admins can access here`
        })
    }
    next()
}

const hasRoles = (...roles) => {
    return (req, res, next) => {
        const {rolId} = req.user;
        if(!roles.includes(rolId)) {
            next({
                status: 401,
                name: "Role required",
                message: `User have not requered role`
            })
        }
        next()
    }
}

module.exports = {
    isAdmin,
    hasRoles
};