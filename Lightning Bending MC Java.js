package com.example.lightningmod;

import com.mojang.blaze3d.systems.RenderSystem;
import net.minecraft.client.Minecraft;
import net.minecraft.client.options.KeyBinding;
import net.minecraft.entity.effect.StatusEffectInstance;
import net.minecraft.entity.effect.StatusEffects;
import net.minecraft.entity.player.PlayerEntity;
import net.minecraft.network.chat.Text;
import net.minecraft.server.network.ServerPlayerEntity;
import net.minecraft.text.TextFormat;
import net.minecraft.util.math.BlockPos;
import net.minecraft.util.math.MathHelper;
import net.minecraft.world.World;
import org.lwjgl.glfw.GLFW;
import net.minecraft.client.option.KeyBinding;
import net.minecraft.client.MinecraftClient;

public class LightningMod implements ModInitializer {

    public static final String MOD_ID = "lightningmod";
    public static final KeyBinding summonLightningKey = new KeyBinding(
        "key.lightningmod.summon_lightning", 
        GLFW.GLFW_KEY_P, 
        "category.lightningmod"
    );
    
    @Override
    public void onInitialize() {
        ClientTickEvents.END_CLIENT_TICK.register(client -> {
            if (summonLightningKey.isPressed()) {
                PlayerEntity player = client.player;
                if (player != null) {
                    summonLightning(player);
                }
            }
        });
    }
    
    private static void summonLightning(PlayerEntity player) {
        World world = player.getWorld();
        if (!world.isClient) {
            BlockPos pos = player.getBlockPos().add(player.getRotationVector().multiply(10)); // Position in front of the player
            world.strikeLightning(new LightningEntity(EntityType.LIGHTNING_BOLT, world));
        }
    }
}
