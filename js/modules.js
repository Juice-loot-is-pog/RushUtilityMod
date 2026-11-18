// The list of Rush mods, shared by every page.
// Copied from the client repo: Rush/Rush/editions/Alpha.modules and Beta.modules.
// When a mod is added to Rush, add its ID here too (Alpha list or Beta list).

const ALPHA_MODS = `Aimbot AutoClicker TriggerBot AutoGap AutoPot AutoAnchor Surround AutoTrap AutoWeb AutoMace Killaura Criticals
SprintReset BowAimbot AutoShield CrystalAura Reach Hitboxes Bhop Speed Step Parkour YawLock SmoothSpin AirJump AntiImmobile
AutoWalk Baritone AutoSneak AutoSprint Blink Clip AutoBucket ElytraFly BoatFly EntityControl FastStop Fly HoleSnap
InventoryMove Jesus Jetpack NoClip NoFall NoSlowDown Phase ReverseStep SafeWalk LongJump AntiVoid Spider DamageBoost
JumpReset TargetStrafe AnarchyStrafe Velocity AutoTotem MiddleClickAction AutoArmor Scaffolding FastUse ChatSpammer
TextHotkeys AutoGG Freecam PacketMine InstantBreak NoGhostBlocks AutoTool AutoWeapon InventoryManager InventoryTweaks
BedBreaker AutoEat HotbarRefill ChestStealer AutoRespawn MenuParticles ArrayList KeyList ClickGuiSettings Watermark
Paperdoll Keystrokes LevelInfo Notifications CoordinatesHud DirectionHud FpsHud SpeedHud ClockHud Spotify TotemCountHud
ArmorHud LagbackHud InventoryHud CpsHud CombatInfoHud PingHud CombatItemCounter TabList Tracers Chams ESP BlockFinder
BaseFinder HoleESP FakePlayer Trail ProjectileTrails JumpCircles BreakProgress PlaceHighlights TargetRing TargetEsp Fog
Fullbright Performance ViewModel Nametags CustomFov Zoom Freelook NoHurtCam NoRender ItemEsp Crosshair BlockOutline
Waypoints TargetHud HudEditor CheckBypasses VelocityCap LocalWorld AntiBot Friends Targets AntiCheatMonitor AntiAfk
DeathLog PlayerAlerts NameProtect AutoLog AutoReconnect HideChat HideCoords NoRotate AntiCrash AirPlace`.split(/\s+/);

const BETA_MODS = `ResourcePackChanger Scripts ElytraSwap Offhand MaceKill SpearKill Schematics SchematicList LogoutSpots StorageESP
HitEffects HoleFiller AutoCity AutoBed PopCounter Nuker WebBreaker AutoMine Macros Minimap WorldProfiles ShulkerPeek
ShulkerNesting ContainerView EffectsHud TimeWeather AutoFarm AutoFish AutoQueue Cosmetics Shaders PacketLogger Warnings
CustomText CustomChat Animations NoCameraClip Timer TickShift TerrainSpeed HighJump Glide FastPlace BlockReach
NoMiningTrace LagNotifier BaritoneHud ClickTP ServerRestrictions SlowFall FarWalk CornerClip DashDupe`.split(/\s+/);

// Display names: IDs like "AutoGap" become "Auto Gap". Special cases go here.
const MOD_NAMES = { Killaura: "Kill Aura", ItemEsp: "Item ESP", TargetEsp: "Target ESP", HudEditor: "HUD Editor",
  TabList: "Tab List", ClickTP: "Click TP", AutoGG: "Auto GG", FpsHud: "FPS HUD", CpsHud: "CPS HUD",
  ClickGuiSettings: "Click GUI", CustomFov: "Custom FOV", ResourcePackChanger: "Resource Pack Changer",
  DashDupe: "IGN Dupe" };

function modName(id) {
  return MOD_NAMES[id] || id
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\bEsp\b/g, "ESP").replace(/\bHud\b/g, "HUD");
}

// Every mod, A to Z: { name, beta }.
const ALL_MODS = [
  ...ALPHA_MODS.map(id => ({ name: modName(id), beta: false })),
  ...BETA_MODS.map(id => ({ name: modName(id), beta: true })),
].sort((a, b) => a.name.localeCompare(b.name));
