# Include standard modules
import getopt, sys, os


def run_without_map():
    if traceFile == "":
        print("traceFile mush be present")
        show_help()
        return
    absTraceFile = os.path.abspath(traceFile)
    if os.path.isfile(absTraceFile):
        os.system(f"electron . null {absTraceFile}")
    else:
        print(f"Trace File mentioned doesn't exist: {absTraceFile}")
        show_help()

def run_with_grid():
    if traceFile == "":
        print("traceFile mush be present")
        show_help()
        return
    absGridFile = os.path.abspath(gridFile)
    if not os.path.isfile(absGridFile):
        print(f"Grid File mentioned doesn't exist: {absGridFile}")
        show_help()
        return
    absTraceFile = os.path.abspath(traceFile)
    if not os.path.isfile(absTraceFile):
        print(f"Trace File mentioned doesn't exist: {absTraceFile}")
        show_help()
        return
    os.system(f"electron . {mapType} {absGridFile} {absTraceFile}")

def run_with_mesh():
    if traceFile == "":
        print("traceFile mush be present")
        show_help()
        return
    absMeshFile = os.path.abspath(meshFile)
    if not os.path.isfile(absMeshFile):
        print(f"Mesh File mentioned doesn't exist: {absMeshFile}")
        show_help()
        return
    absTraceFile = os.path.abspath(traceFile)
    if not os.path.isfile(absTraceFile):
        print(f"Trace File mentioned doesn't exit: {absTraceFile}")
        show_help()
        return
    os.system(f"electron . {mapType} {absMeshFile} {absTraceFile}")

def run_with_roadnetwork():
    if traceFile == "":
        print("Error: traceFile mush be present")
        show_help()
        return
    absCoFile = os.path.abspath(coFile)
    if not os.path.isfile(absCoFile):
        print(f"Error: Co File mentioned doesn't exit: {absCoFile}")
        show_help()
        return
    absGrFile = os.path.abspath(grFile)
    if not os.path.isfile(absGrFile):
        print(f"Error: Gr File mentioned doesn't exit: {absGrFile}")
        show_help()
        return
    absTraceFile = os.path.abspath(traceFile)
    if not os.path.isfile(absTraceFile):
        print(f"Error: Trace File mentioned doesn't exit: {absTraceFile}")
        show_help()
        return
    os.system(f"electron . {mapType} {absCoFile} {absGrFile} {absTraceFile}")

def show_help():
    print("Usage: python pathfinding-debugger.py [mapType] [mapFiles] [traceFile]")
    print("-z --mapType:  Used to specify map type - [""|grid|mesh|roadnetwork]")
    print("-g --gridFile: Used to specify gridFile when mapType is grid - [/path/to/gridFile.grid]")
    print("-m --meshFile: Used to specify meshFile when mapType is mesh - [/path/to/meshFile.mesh]")
    print("-c --coFile: Used to specify coFile(along with grFile) when mapType is roadnetwork - [/path/to/coFile.co]")
    print("-a --grFile: Used to specify grFile(along with coFile) when mapType is roadnetwork - [/path/to/grFile.gr]")
    print("-t --traceFile: Used to specify traceFile(compulsory) - [/path/to/traceFile.json]")

if __name__ == "__main__":
    # Get full command-line arguments
    full_cmd_arguments = sys.argv

    # Keep all but the first
    argument_list = full_cmd_arguments[1:]


    short_options = "hz:g:m:c:a:t:"
    long_options = ["help", "mapType=", "gridFile=", "meshFile=", "coFile=", "grFile=","traceFile="]

    try:
        arguments, values = getopt.getopt(argument_list, short_options, long_options)
    except getopt.error as err:
        # Output error, and return with an error code
        print (str(err))
        sys.exit(2)

    mapType = gridFile = meshFile = coFile = grFile = traceFile = ""

    for current_argument, current_value in arguments:
        if current_argument in ("-h", "--help"):
            show_help()
        elif current_argument in ("-z", "--mapType"):
            mapType = current_value
        elif current_argument in ("-g", "--gridFile"):
            gridFile = current_value
        elif current_argument in ("-m", "--meshFile"):
            meshFile = current_value
        elif current_argument in ("-c", "--coFile"):
            coFile = current_value
        elif current_argument in ("-a", "--grFile"):
            grFile = current_value
        elif current_argument in ("-t", "--traceFile"):
            traceFile = current_value

    if mapType == "":
        if gridFile == "" and meshFile == "" and coFile == "" and grFile == "":
            run_without_map()
        else:
            print("Error: mapType is empty but map file(s) have value")
            show_help()
    elif mapType == "grid":
        if gridFile != "" and meshFile == "" and coFile == "" and grFile == "":
            run_with_grid()
        else:
            print("Error: Incorrect map file(s) mentioned")
            show_help()
    elif mapType == "mesh":
        if meshFile != "" and gridFile == "" and coFile == "" and grFile == "":
            run_with_mesh()
        else:
            print("Error: Incorrect map file(s) mentioned")
            show_help()
    elif mapType == "roadnetwork":
        if gridFile == "" and meshFile == "" and coFile != "" and grFile != "":
            run_with_roadnetwork()
        else:
            print("Error: Incorrect map file(s) mentioned")
            show_help()
    else:
        print("Error: Invalid mapType mentioned. Should be empty or [grid|mesh|roadnetwork]")
        show_help()
