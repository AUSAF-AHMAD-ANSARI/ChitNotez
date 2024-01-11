/**
 * GET /
 * Homepage 
 */
exports.homepage = async(req, res) => {
    const locals = {
        title: "NodeJs Notes",
        description: "Free NodeJS Notes App.",
    }
    res.render('index', {
        locals,
        layout: '../views/layouts/front-page'
    });
}


/**
 * GET /
 * About 
 */
exports.about = async(req, res) => {
    const locals = {
        title: "About - NodeJs Notes",
        description: "Free NodeJS Notes App.",
    }
    res.render('about', locals);
}

exports.chat = async(req, res) => {
    const locals = {
        title: "abcdef",
        description: "i am ausaf ahmad",
    }
    res.render('chat', {
        locals,
        layout: '../views/layouts/front-page'
    });
}