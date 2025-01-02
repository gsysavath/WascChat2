/* Text on top section of website. Meant to be changed for intended purpose of specific site.

    1. To make a line bulleted, add a "-" before the line.


    2. To make text bold, surround text with double asterisks.
    You should not surround multiline sections with double asterisks. Instead,
    they should only be applied to specific lines. For example, the following
    would work:

    **Multiple**
    **Bolded**
    **Lines**

    But the following would not:

    **Multiple
    Bolded
    Lines**
    
    Lastly, for bold bulleted lines, double asterisks should come after the "-".
    For example, the following would work:
    
    -**Hello**

    But the following would not:

    **-Hello**
*/

const infoText = `
Your information here
- this example line is bulleted
**This example line is bolded**
-**This example line is bolded and bulleted**
`;

export default infoText;
