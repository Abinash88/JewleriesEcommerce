import React, { useEffect } from 'react'

const useHandleAccordian = () => {
    useEffect(() => {
        if (typeof window === "undefined") return;
        const buttonClick = document.querySelectorAll("#AccordianTitle h2 button");
        const ArrayBtn = Array.from(buttonClick);

        ArrayBtn.map((item, i) => {
            const CheckBoxOpen = () => {
                const arrowBtn = item.querySelector(
                    "#AccordianTitle > h2 > button > span"
                );
                ArrayBtn?.map((btn, index) => {
                    const disableBtn = btn.querySelector(
                        "#AccordianTitle > h2 > button > span"
                    );
                    if (i !== index) {
                        disableBtn?.setAttribute("style", `transform:rotate(0deg)`);
                    }
                });

                const doesOpenBox = item?.getAttribute("aria-expanded");
                if (doesOpenBox === "true") {
                    arrowBtn?.setAttribute("style", `transform:rotate(-90deg)`);
                } else {
                    arrowBtn?.setAttribute("style", `transform:rotate(0deg)`);
                }
            };
            item?.addEventListener("click", CheckBoxOpen);

            return () => item?.addEventListener("click", CheckBoxOpen);
        });
    }, []);

    return (
        <div>useHandleAccordian</div>
    )
}

export default useHandleAccordian