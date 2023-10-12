

export const pageAnimation = {
    hidden: {
        opacity: 0,
        y: 300
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            when: 'beforeChildren',
            staggerChildren: 0.25,
        },
    },
    exit: {
        opacity: 0,
        y: 300,
        transition : {
            duration: 0.5,
        }
    }
};

export const photoAnima = {
    hidden: {scale: 1.5, opacity: 0},
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            ease: 'easeOut',
            duration: 0.75,
        }
    }
};


export const fade = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {ease: 'easeOut', duration: 0.7},
    }
};

export const lineAnim = {
    hidden: {width: '0%'},
    show: {
        width: '100%',
        transition: { duration: 1.5},
    }
};

export const slider = {
    hidden: {x: '-130%', skew: '45deg'},
    show: {
        x: '100%',
        skew: '0deg',
        transition: {ease: 'easeOut', duration: 1},
    },
};

export const sliderContainer = {
    hidden: {opacity: 1},
    show: {opacity: 1, transition: {staggerChildren: 0.1, ease: 'easeOut'}}
};

export const titleAnim = {
    hidden: {opacity: 0},
    show: {opacity: 1, transition: {duration: 1.5}},
};

export const container = {
    hidden: {x: 60},
    show: {x: 0, transition: {duration: 0.75, ease: 'easeOut', staggerChildren: 0.5}   },
};
