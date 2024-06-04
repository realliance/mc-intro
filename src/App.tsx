import { Button, Tabs } from "flowbite-react";
import { ServerBanner } from "./server";
import { HiHeart, HiMiniWrench } from "react-icons/hi2";
import { CopyToClipboard, Instruction, Link } from "./format";
import { HiGlobe } from "react-icons/hi";
import { MdWindow } from "react-icons/md";
import { FaApple, FaLinux } from "react-icons/fa";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen my-16 gap-6 mx-5">
      <img src="reABackground.png" className="rounded-lg max-w-64" />
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">Realliance Minecraft</h1>
        <h2 className="text-2xl">Modpack and Community Server</h2>
      </div>
      <ServerBanner />
      <Button size="xl" href="https://map.mc.realliance.net" target="_blank"><HiGlobe className="mr-2 h-5 w-5" />View World Map</Button>

      <h1 className="text-4xl font-bold">Get the Pack</h1>
      <div className="max-w-2xl">
        <div className="my-2">
          <Instruction step={1} title="Get Java 17">
            <p className="my-3">
              Minecraft 1.20.1 requires Java 17 to run. Use the platform specific instructions below:
            </p>
            <Tabs aria-label="Install Java" style="default" className="min-w-lg">
              <Tabs.Item active icon={MdWindow} title="Windows">
                Download <Link to="https://aka.ms/download-jdk/microsoft-jdk-17-windows-x64.msi">OpenJDK 17 from Microsoft.</Link>
              </Tabs.Item>
              <Tabs.Item icon={FaApple} title="Mac">
                Consider using <Link to="https://brew.sh/">brew</Link> to install OpenJDK:
                <p className="pl-3 my-2 font-mono">brew install openjdk@17</p>
              </Tabs.Item>
              <Tabs.Item icon={FaLinux} title="Linux">
                <h2 className="text-lg">Ubuntu</h2>
                <p className="pl-3 my-2 font-mono">sudo apt install openjdk-17-jdk</p>

                <h2 className="text-lg">Arch Linux (<span>pacman</span>)</h2>
                <p className="pl-3 my-2 font-mono">sudo pacman -S jdk17-openjdk</p>
              </Tabs.Item>
            </Tabs>
          </Instruction>
        </div>

        <h1 className="text-2xl font-bold my-3">Choose your Launcher:</h1>
        <Tabs aria-label="Get the pack tabs" style="default" className="min-w-lg">
          <Tabs.Item active title="Prism Launcher (Recommended)" icon={HiHeart}>
            <div className="flex flex-col gap-4">
              <p>Prism Launcher is recommended to easily support managing your modpacks.</p>
              <Instruction step={2} title="Install Prism Launcher">
                <p>
                  Prism Launcher downloads can be found{" "}
                  <Link to="https://prismlauncher.org/download">
                    on their website.
                  </Link>
                </p>
              </Instruction>
              <Instruction step={3} title="Add the Pack to Prism Launcher">
                <p>
                  In Prism Launcher, click "Add Instance" in the top left of the interface, and under the tab "Modrinth", search for "Realliance Community". Click OK to add it to your Prism Launcher.
                </p>
                <p className="mt-4">It's also possible to add the pack via the "Import" tab by importing the <span className="font-mono">mrpack</span> from our <Link to="https://modrinth.com/modpack/realliance-community/version/latest">Modrinth Page.</Link></p>
              </Instruction>
              <Instruction step={4} title="Adjust your Prism Launcher Settings">
                <p>
                  In Prism Launcher, click "Settings" in the top of the interface. Under "Java", ensure Prism Launcher is using a good Java path for your system. Under the Memory section of this page, it is recommened to set it to at least 6 GB (6144 MiB). Always set your Minimum and Maximum memory allocation to the same number to improve performance.
                </p>
              </Instruction>
              <Instruction step={5} title="(Optional) Add JVM Arguments">
                <p>For even better performance, we recommend adding the following arguments to the "JVM Arguments" section of the Java settings page:</p>
                <CopyToClipboard block="-XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40 -XX:G1HeapRegionSize=8M -XX:G1ReservePercent=20 -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=15 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=5 -XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1" />
              </Instruction>
            </div>
          </Tabs.Item>
          <Tabs.Item title="Bring your own Launcher" icon={HiMiniWrench}>
            The latest version of the modpack can be downloaded from <Link to="https://modrinth.com/modpack/realliance-community/version/latest">Modrinth</Link> for a <span className="font-mono">mrpack</span> file and our <Link to="https://github.com/realliance/mc-modpack/releases">Github Releases</Link> for a ZIP file.
          </Tabs.Item>
        </Tabs>
      </div>
      <h1 className="text-4xl font-bold">Join the Server</h1>
      <div className="max-w-2xl flex flex-col gap-2">
        Our server automatically onboards all Realliance accounts that have connected their Minecraft account.

        <Instruction step={1} title="Get a Realliance ID Account">
          Have someone provide you with an invite link for a Realliance ID account (which would be in the format of <span className="font-mono">https://id.realliance.net/if/flow/default-invitation-flow/...</span>)
        </Instruction>
        <Instruction step={2} title="Join the Community Minecraft Group">
          Join the <Link to="https://community.realliance.net/group/8080b382-8900-4152-90e9-0aef930c5ef3">Minecraft Group on Realliance Community.</Link> You can log into the site with your Realliance ID.
        </Instruction>
        <Instruction step={3} title="Connect your Minecraft Account">
          In the top right of the <Link to="https://community.realliance.net/">Realliance Community</Link> site, log in and click on your name to access your profile and then click "Edit Profile". On your edit page, under "Connections", connect your Minecraft account. You will be required to log into your Microsoft account.
        </Instruction>
        <Instruction step={4} title="Wait">
          Our allowlist syncing occurs once an hour.
        </Instruction>
        <Instruction step={5} title="Play">
          The modpack should have the Realliance Community server (<span className="font-mono">mc.realliance.net</span>) already in the server list.
        </Instruction>
      </div>
    </div>
  );
}

export default App;
