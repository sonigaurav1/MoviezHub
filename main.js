// Share button
window.onscroll = function () {
    scrollFunction();
};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("goToTopBtn").classList.add("show");
    } else {
        document.getElementById("goToTopBtn").classList.remove("show");
    }
}
function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function scrollToTop() {

    const scroll = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;

    if (scroll > 0) {
        window.requestAnimationFrame(scrollToTop);

        window.scrollTo(0, scroll - scroll / 8);
    }
}
function goToTop() {
    scrollToTop();
}
const shareBtn = document.getElementById('shareBtn');

shareBtn.addEventListener('click', function () {
    if (navigator.share) {
        navigator.share({
            title: 'GOKU Website',
            text: 'Check out this amazing moviez website Hub!',
            url: 'https://gaurav77.netlify.app/'
        })
            .then(() => {
                console.log('Share successful!');
            })
            .catch((error) => {
                console.error('Error sharing:', error);
            });
    } else {
        alert('Sharing is not supported on this device.');
    }
});

const shareBtn2 = document.getElementById('shareBtn2');

shareBtn2.addEventListener('click', function () {
    if (navigator.share) {
        navigator.share({
            title: 'HD TODAY Website',
            text: 'Check out this amazing moviez website Hub!',
            url: 'https://gaurav77.netlify.app/'
        })
            .then(() => {
                console.log('Share successful!');
            })
            .catch((error) => {
                console.error('Error sharing:', error);
            });
    } else {
        alert('Sharing is not supported on this device.');
    }
});

const shareBtn3 = document.getElementById('shareBtn3');

shareBtn3.addEventListener('click', function () {
    if (navigator.share) {
        navigator.share({
            title: 'Pikashow Apk',
            text: 'Check out this amazing moviez website Hub!',
            url: 'https://gaurav77.netlify.app/'
        })
            .then(() => {
                console.log('Share successful!');
            })
            .catch((error) => {
                console.error('Error sharing:', error);
            });
    } else {
        alert('Sharing is not supported on this device.');
    }
});

const shareBtn4 = document.getElementById('shareBtn4');

shareBtn4.addEventListener('click', function () {
    if (navigator.share) {
        navigator.share({
            title: 'Castle Apk',
            text: 'Check out this amazing moviez website Hub!',
            url: 'https://gaurav77.netlify.app/'
        })
            .then(() => {
                console.log('Share successful!');
            })
            .catch((error) => {
                console.error('Error sharing:', error);
            });
    } else {
        alert('Sharing is not supported on this device.');
    }
});


const shareBtn5 = document.getElementById('shareBtn5');

shareBtn5.addEventListener('click', function () {
    if (navigator.share) {
        navigator.share({
            title: 'Castle Apk',
            text: 'Check out this amazing moviez website Hub!',
            url: 'https://gaurav77.netlify.app/'
        })
            .then(() => {
                console.log('Share successful!');
            })
            .catch((error) => {
                console.error('Error sharing:', error);
            });
    } else {
        alert('Sharing is not supported on this device.');
    }
});

const shareBtn6 = document.getElementById('shareBtn6');

shareBtn6.addEventListener('click', function () {
    if (navigator.share) {
        navigator.share({
            title: 'Castle Apk',
            text: 'Check out this amazing moviez website Hub!',
            url: 'https://gaurav77.netlify.app/'
        })
            .then(() => {
                console.log('Share successful!');
            })
            .catch((error) => {
                console.error('Error sharing:', error);
            });
    } else {
        alert('Sharing is not supported on this device.');
    }
});

const shareBtn7 = document.getElementById('shareBtn7');

shareBtn7.addEventListener('click', function () {
    if (navigator.share) {
        navigator.share({
            title: 'Castle Apk',
            text: 'Check out this amazing moviez website Hub!',
            url: 'https://gaurav77.netlify.app/'
        })
            .then(() => {
                console.log('Share successful!');
            })
            .catch((error) => {
                console.error('Error sharing:', error);
            });
    } else {
        alert('Sharing is not supported on this device.');
    }
});

const shareBtn8 = document.getElementById('shareBtn8');

shareBtn8.addEventListener('click', function () {
    if (navigator.share) {
        navigator.share({
            title: 'Castle Apk',
            text: 'Check out this amazing moviez website Hub!',
            url: 'https://gaurav77.netlify.app/'
        })
            .then(() => {
                console.log('Share successful!');
            })
            .catch((error) => {
                console.error('Error sharing:', error);
            });
    } else {
        alert('Sharing is not supported on this device.');
    }
});

const shareBtn9 = document.getElementById('shareBtn9');

shareBtn9.addEventListener('click', function () {
    if (navigator.share) {
        navigator.share({
            title: 'Castle Apk',
            text: 'Check out this amazing moviez website Hub!',
            url: 'https://gaurav77.netlify.app/'
        })
            .then(() => {
                console.log('Share successful!');
            })
            .catch((error) => {
                console.error('Error sharing:', error);
            });
    } else {
        alert('Sharing is not supported on this device.');
    }
});

const shareBtn10 = document.getElementById('shareBtn10');

shareBtn10.addEventListener('click', function () {
    if (navigator.share) {
        navigator.share({
            title: 'Castle Apk',
            text: 'Check out this amazing moviez website Hub!',
            url: 'https://gaurav77.netlify.app/'
        })
            .then(() => {
                console.log('Share successful!');
            })
            .catch((error) => {
                console.error('Error sharing:', error);
            });
    } else {
        alert('Sharing is not supported on this device.');
    }
});

const shareBtn11 = document.getElementById('shareBtn11');

shareBtn11.addEventListener('click', function () {
    if (navigator.share) {
        navigator.share({
            title: 'Castle Apk',
            text: 'Check out this amazing moviez website Hub!',
            url: 'https://gaurav77.netlify.app/'
        })
            .then(() => {
                console.log('Share successful!');
            })
            .catch((error) => {
                console.error('Error sharing:', error);
            });
    } else {
        alert('Sharing is not supported on this device.');
    }
});

const shareBtn12 = document.getElementById('shareBtn12');

shareBtn12.addEventListener('click', function () {
    if (navigator.share) {
        navigator.share({
            title: 'Castle Apk',
            text: 'Check out this amazing moviez website Hub!',
            url: 'https://gaurav77.netlify.app/'
        })
            .then(() => {
                console.log('Share successful!');
            })
            .catch((error) => {
                console.error('Error sharing:', error);
            });
    } else {
        alert('Sharing is not supported on this device.');
    }
});

const shareBtn13 = document.getElementById('shareBtn13');

shareBtn13.addEventListener('click', function () {
    if (navigator.share) {
        navigator.share({
            title: 'Castle Apk',
            text: 'Check out this amazing moviez website Hub!',
            url: 'https://gaurav77.netlify.app/'
        })
            .then(() => {
                console.log('Share successful!');
            })
            .catch((error) => {
                console.error('Error sharing:', error);
            });
    } else {
        alert('Sharing is not supported on this device.');
    }
});

const shareBtn14 = document.getElementById('shareBtn14');

shareBtn14.addEventListener('click', function () {
    if (navigator.share) {
        navigator.share({
            title: 'Castle Apk',
            text: 'Check out this amazing moviez website Hub!',
            url: 'https://gaurav77.netlify.app/'
        })
            .then(() => {
                console.log('Share successful!');
            })
            .catch((error) => {
                console.error('Error sharing:', error);
            });
    } else {
        alert('Sharing is not supported on this device.');
    }
});

const shareBtn15 = document.getElementById('shareBtn15');

shareBtn15.addEventListener('click', function () {
    if (navigator.share) {
        navigator.share({
            title: 'Castle Apk',
            text: 'Check out this amazing moviez website Hub!',
            url: 'https://gaurav77.netlify.app/'
        })
            .then(() => {
                console.log('Share successful!');
            })
            .catch((error) => {
                console.error('Error sharing:', error);
            });
    } else {
        alert('Sharing is not supported on this device.');
    }
});

const shareBtn16 = document.getElementById('shareBtn16');

shareBtn16.addEventListener('click', function () {
    if (navigator.share) {
        navigator.share({
            title: 'Castle Apk',
            text: 'Check out this amazing moviez website Hub!',
            url: 'https://gaurav77.netlify.app/'
        })
            .then(() => {
                console.log('Share successful!');
            })
            .catch((error) => {
                console.error('Error sharing:', error);
            });
    } else {
        alert('Sharing is not supported on this device.');
    }
});

const shareBtn17 = document.getElementById('shareBtn17');

shareBtn17.addEventListener('click', function () {
    if (navigator.share) {
        navigator.share({
            title: 'Castle Apk',
            text: 'Check out this amazing moviez website Hub!',
            url: 'https://gaurav77.netlify.app/'
        })
            .then(() => {
                console.log('Share successful!');
            })
            .catch((error) => {
                console.error('Error sharing:', error);
            });
    } else {
        alert('Sharing is not supported on this device.');
    }
});

const shareBtn18 = document.getElementById('shareBtn18');

shareBtn18.addEventListener('click', function () {
    if (navigator.share) {
        navigator.share({
            title: 'Castle Apk',
            text: 'Check out this amazing moviez website Hub!',
            url: 'https://gaurav77.netlify.app/'
        })
            .then(() => {
                console.log('Share successful!');
            })
            .catch((error) => {
                console.error('Error sharing:', error);
            });
    } else {
        alert('Sharing is not supported on this device.');
    }
});

const shareBtn19 = document.getElementById('shareBtn19');

shareBtn19.addEventListener('click', function () {
    if (navigator.share) {
        navigator.share({
            title: 'Castle Apk',
            text: 'Check out this amazing moviez website Hub!',
            url: 'https://gaurav77.netlify.app/'
        })
            .then(() => {
                console.log('Share successful!');
            })
            .catch((error) => {
                console.error('Error sharing:', error);
            });
    } else {
        alert('Sharing is not supported on this device.');
    }
});
