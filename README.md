# glslify-simple-include

glslify LOCAL transform for a simple "#pragma include" directive in shader files.  This is different from the build in requires in glslify in that it simply pulls the entire referenced file in without any name-mangling (so it effectively allows multiple "exported" tokens)

Note: this only works as a local transform
Note: this is only tested with glslify 5.0.1