# MIncraft-Lightning-Bending


Step 1: Set Up Your Modding Environment
Before you start writing the mod, you need to set up Minecraft Forge and an Integrated Development Environment (IDE) like IntelliJ IDEA or Eclipse.

Download and install Minecraft Forge MDK (Mod Development Kit) from the official Minecraft Forge website.
Set up the Forge workspace:
Extract the MDK to a folder.
Open a terminal (command prompt) in that folder.
Run gradlew genEclipseRuns for Eclipse or gradlew genIdeaRuns for IntelliJ.
Open the folder in your IDE.
Sync Gradle: After opening your project, sync the Gradle dependencies.
Step 2: Create the Mod File
Now we’ll create the mod file that will contain the logic for summoning the lightning.

Create the Mod Class: Inside the src/main/java directory, create a package for your mod (e.g., com.example.lightningmod).

Then create a class LightningMod.java inside that package.

Then press p to summon lightning
