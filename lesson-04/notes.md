Insted of using `` js   const file = `${notesDir}/${title}` `` 

I should have used `` js const file = path.join(notesDir, title); ``