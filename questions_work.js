// B04 Reading Passage 1

class Question {
    constructor(id, passage, prompt, A, B, C, D, E){
        this.id = id;
        this.flagged = false;
        this.selected = id===1;
        this.answered = false;
        this.passage = passage;
        this.content = {
            prompt,
            A,
            B,
            C,
            D,
            E: E || null
        };
        this.studentResponse = null;
    }
}

new Question(
    1,
    <PassageOne/>,
    `The point of view from which the passage is told is best described as
    that of:`,
    <span>A. an unidentified narrator relating the thoughts and actions
        of both Ruma and Ruma's father.</span>,
    <span>B. an unidentified narrator relating the thoughts and actions
        of both Ruma and Adam.
    </span>,
    <span>C. Ruma, who relates her own thoughts and actions.</span>,
    <span>D. Ruma's father, who relates his own thoughts and actions.</span>,

)
new Question(
    2,
    <PassageOne/>,
    `The passage can best be described as an exploration of a:`,
    <span>F. family's ongoing disagreement.</span>,
    <span>G. family's shifting dynamics.</span>,
    <span>H. husband's relationship with his wife.</span>,
    <span>J. mother's struggle with raising a child.</span>,
)
new Question(
    3,
    <PassageOne/>,
    `Based on the passage, Akash's attitude toward Ruma's father can best
    be described as:`,
    <span>A. patient.</span>,
    <span>B. diffident.</span>,
    <span>C. resentful.</span>,
    <span>D. adoring.</span>,
)
new Question(
    4,
    <PassageOne/>,
    `In the context of the passage, the word "drape" (line 29) mainly 
    serves to highlight the:`,
    <span>A. hasty way in which Akash covers himself with the blanket.</span>,
    <span>B. attentive way in which Akash is sprawled on the ground for 
        his nap. </span>,
    <span>C. endearing way in which Akash is sprawled on the ground for 
        his nap.</span>,
    <span>D. meticulous way in which Ruma's father tidies Ruma's home.</span>,
)
new Question(
    5,
    <PassageOne/>,
    `Which of the following statements most effectively summarizes the
    action described in the eighth paragraph (lines 32-49)?`,
    <span>A. Ruma goes to see if Akash is sleeping, overhears her father
        reading him a book, and decides not to interrupt them.</span>,
    <span>B. Ruma tells her father that it's past Akash's bedtime 
        but allows Akash and her father to finish the book they are reading. </span>,
    <span>C. Ruma goes to get Akash ready for bed and overhears him and her
        father taking turns reading a book.</span>,
    <span>D. Ruma overhears her father reading Akash a book, tells her
        father that it's past Akash's bedtime, and returns upstairs.</span>,
)
new Question(
    7,
    <PassageOne/>,
    `In the context of the passage, the detail about the toys, pens,
    pencils, and pennies in the ground mainly serves to indicate that:`,
    <span>A. Akash often leaves his things in the backyard.</span>,
    <span>B. Ruma's father has more work to do in order to clean up Ruma's 
        garden.</span>,
    <span>C. Ruma has neglected the garden in the backyard.</span>,
    <span>D. Akash has been inspired by his grandfather to start a garden
        of his own.</span>,
)
new Question(
    8,
    <PassageOne/>,
    `In the context of the passage, the detail that Ruma is "briefly
    envious of her own son" (lines 48-49) suggests that Ruma:`,
    <span>A. believes that her father and Akash's relationship is stronger
        than her and her father's relationship.</span>,
    <span>B. wishes that Akash would show her the same level of affection
        that he shows her father.</span>,
    <span>C. is less patient with Akash than she would like to be.</span>,
    <span>D. is less emotionally mature than Akash is.</span>,
)
new Question(
    9,
    <PassageOne/>,
    `According to the passage, Ruma's father plants a small hydrangea
    in the garden mainly because he:`,
    <span>A. knows that it is easy to take care of.</span>,
    <span>B. remembers that it is Ruma's favorite.</span>,
    <span>C. wants to honor his wife's memory.</span>,
    <span>D. believes it will bring Ruma and Adam good luck.</span>,
)
new Question(
    10,
    <PassageOne/>,
    `As it is used in line 64, the phrase <em>come in</em> most nearly means:`,
    <span>A. take part.</span>,
    <span>B. approach.</span>,
    <span>C. perform.</span>,
    <span>D. mature.</span>,
)
)
new Question(
    11,
    <PassageTwo/>,
    `What is SMART`,
    <span>A.</span>,
    <span>B.</span>,
    <span>C.</span>,
    <span>D.</span>,
)