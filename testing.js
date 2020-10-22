
        let btn = document.querySelector('.container');
        let send = document.querySelector('#send1')
        // let end = 50;

        btn.addEventListener('click', function() {
            send.value = document.querySelector('.progress').value;
            btn.disabled = true;
            animate(send).then(() => {
                btn.disabled = false;
            })
        });

        function animate(node) {
            return new Promise(function(resolve) {
                var i = send.value;
                (function loop() {
                    node.value = i;
                    if (i < end) {
                        i++;
                        requestAnimationFrame(loop);
                    } else {
                        resolve();
                    }
                })();
            });
        }