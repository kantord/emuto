---
id: shebang
title: Creating scripts using emuto
---

The shebang for emuto is `#! emuto -s`.

To create an emuto script simply create a file named `my_script.emu`, with the
following that shebang in its first line. For example:

my_script.emu
```
#! emuto -s

{
  "static": {
    "data": 42
  }
}
```

Make your script executable:

```bash
chmod +x ./my_script.emu
```

Now you can run your script just like any other script:

```bash
./my_script.emu
```

```json
{
  "static": {
    "data": 42
  }
}
```
