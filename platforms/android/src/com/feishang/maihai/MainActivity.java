/*
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
 */

package com.feishang.maihai;

import org.apache.cordova.CordovaActivity;

import android.content.SharedPreferences;
import android.content.SharedPreferences.Editor;
import android.os.Bundle;
import android.view.GestureDetector;
import android.view.GestureDetector.OnGestureListener;
import android.view.MotionEvent;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.LinearLayout;
import android.widget.ViewFlipper;


public class MainActivity extends CordovaActivity implements OnGestureListener
{
	ViewFlipper flipper;
	SharedPreferences preferences;
	private GestureDetector detector;
	private LinearLayout layout;
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        // Set by <content src="index.html" /> in config.xml
		preferences = getSharedPreferences("count", MODE_WORLD_READABLE);
		int count = preferences.getInt("count", 0);

		if (count == 0) {
			Editor editor = preferences.edit();
			editor.putInt("count", ++count);
			editor.commit();
			setContentView(R.layout.act_first);
			layout = (LinearLayout) findViewById(R.id.last_layout);
			layout.setOnClickListener(new OnClickListener() {

				@Override
				public void onClick(View v) {
					// TODO Auto-generated method stub
					loadUrl(launchUrl);
				}
			});
			flipper = (ViewFlipper) findViewById(R.id.view_flipper);
			detector = new GestureDetector(this);
		} else {
			loadUrl(launchUrl);
		}
	}

	@Override
	protected void onResume() {
		// TODO Auto-generated method stub
		super.onResume();
	}

	@Override
	protected void onPause() {
		// TODO Auto-generated method stub
		super.onPause();
    }

	@Override
	public boolean onDown(MotionEvent arg0) {
		// TODO Auto-generated method stub

		return false;
	}

	@Override
	public boolean onFling(MotionEvent e1, MotionEvent e2, float velocityX, float velocityY) {
		// TODO Auto-generated method stub
		if (flipper == null) {
			return true;
		}
		int a = flipper.getChildCount();
		if (e1.getX() - e2.getX() >= 100) {
			if (flipper.getDisplayedChild() == flipper.getChildCount() - 1) {
				return true;
			}
			flipper.showNext();
		} else if (e2.getX() - e1.getX() >= 100) {
			flipper.showPrevious();
		}
		return false;
	}

	@Override
	public void onLongPress(MotionEvent arg0) {
		// TODO Auto-generated method stub

	}

	@Override
	public boolean onScroll(MotionEvent arg0, MotionEvent arg1, float velocityX, float velocityY) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public void onShowPress(MotionEvent arg0) {
		// TODO Auto-generated method stub

	}

	@Override
	public boolean onSingleTapUp(MotionEvent arg0) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
		public boolean onTouchEvent(MotionEvent event) {
			// TODO Auto-generated method stub
			if(detector != null ){
				
				return this.detector.onTouchEvent(event);
			}
			return false;
		}
}