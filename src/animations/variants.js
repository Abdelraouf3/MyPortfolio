export const listVariants = { 
    hidden : { 
        opacity : 0 
    },
    visible : { 
        opacity : 1, 
        transition : { 
            staggerChildren : 0.2, 
            delayChildren : 0.2 
        } 
    },
}

export const titleVariants = {
    hidden: {
        opacity: 0,
    },

    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.25,
        },
    },
};

export const itemVariantsFromUp = { 
    hidden : { 
        opacity : 0, 
        y : -50 
    },
    visible : { 
        opacity : 1, 
        y : 0, 
        transition : { 
            type : "spring", 
            stiffness : 200, 
            damping : 12 
        } 
    }
}

export const itemVariantsFromDown = { 
    hidden : { 
        opacity : 0, 
        y : 50 
    },
    visible : { 
        opacity : 1, 
        y : 0, 
        transition : { 
            type : "spring", 
            stiffness : 200, 
            damping : 12 
        } 
    }
}

export const itemVariantsFromLeft = { 
    hidden : { 
        opacity : 0, 
        x : -50 
    },
    visible : { 
        opacity : 1, 
        x : 0, 
        transition : { 
            type : "spring", 
            stiffness : 200, 
            damping : 12 
        } 
    }
}

export const itemVariantsFromRight = { 
    hidden : { 
        opacity : 0, 
        x : 50 
    },
    visible : { 
        opacity : 1, 
        x : 0, 
        transition : { 
            type : "spring", 
            stiffness : 200, 
            damping : 12 
        } 
    }
}

export const itemVariantsScaleUp = { 
    hidden : { 
        opacity : 0, 
        scale: 0
    },
    visible : { 
        opacity : 1, 
        scale: [1.50, 1],
        transition : { 
            type : "spring", 
            stiffness : 200, 
            damping : 12 
        } 
    }
}