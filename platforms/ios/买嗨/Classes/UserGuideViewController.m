//
//  UserGuideViewController.m
//  活动天下
//
//  Created by Jiaxn on 16/3/2.
//
//

#import "UserGuideViewController.h"
#import "MainViewController.h"

#define SCREEN_FRAME ([UIScreen mainScreen].bounds)
#define SCREEN_WIDTH ([UIScreen mainScreen].bounds.size.width)
#define SCREEN_HEIGHT ([UIScreen mainScreen].bounds.size.height-20)
#define GUIDE_PAGE 3

@interface UserGuideViewController ()

@end

@implementation UserGuideViewController

- (void)viewDidLoad {
    
    [self.view setBackgroundColor:[UIColor whiteColor]];
    [self initGuide];
    [super viewDidLoad];
    // Do any additional setup after loading the view.
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

-(void) initGuide
{
    UIScrollView *scrollView = [[UIScrollView alloc] initWithFrame:SCREEN_FRAME];
    [scrollView setContentSize:CGSizeMake(SCREEN_WIDTH*GUIDE_PAGE, 0)];
    [scrollView setPagingEnabled:YES];  //视图整页显示
    scrollView.showsHorizontalScrollIndicator = NO;
    [scrollView setBounces:NO]; //避免弹跳效果,避免把根视图露出来
    
    
    UIImageView *imageview1 = [[UIImageView alloc] initWithFrame:CGRectMake(0, 20, SCREEN_WIDTH,SCREEN_HEIGHT)];
    UIImageView *imageview2 = [[UIImageView alloc] initWithFrame:CGRectMake(SCREEN_WIDTH, 20, SCREEN_WIDTH, SCREEN_HEIGHT)];
//    UIImageView *imageView3 = [[UIImageView alloc] initWithFrame:CGRectMake(SCREEN_WIDTH*2, 20, SCREEN_WIDTH, SCREEN_HEIGHT)];
    UIImageView *imageview4 = [[UIImageView alloc] initWithFrame:CGRectMake(SCREEN_WIDTH*2, 20, SCREEN_WIDTH, SCREEN_HEIGHT)];
    
    
    [imageview1 setImage:[UIImage imageNamed:@"hellow1.jpg"]];
    [imageview2 setImage:[UIImage imageNamed:@"hellow2.jpg"]];
//    [imageView3 setImage:[UIImage imageNamed:@"hellow3.jpg"]];
    [imageview4 setImage:[UIImage imageNamed:@"hellow4.jpg"]];
    
    [scrollView addSubview:imageview1];
    [scrollView addSubview:imageview2];
    imageview4.userInteractionEnabled = YES;    //打开imageview3的用户交互;否则下面的button无法响应
    [scrollView addSubview:imageview4];
    
    UIButton *button = [UIButton buttonWithType:UIButtonTypeCustom];//在imageview3上加载一个透明的button
    [button setTitle:nil forState:UIControlStateNormal];
//    [button setTitle:@"点击进入" forState:UIControlStateNormal];
    [button setFrame:CGRectMake(SCREEN_WIDTH/3, SCREEN_HEIGHT*4/5, SCREEN_WIDTH/3, SCREEN_HEIGHT/8)];
    [button addTarget:self action:@selector(firstpressed) forControlEvents:UIControlEventTouchUpInside];
    [imageview4 addSubview:button];
    
    [self.view addSubview:scrollView];
    
    
}
-(void) firstpressed
{
    [UIApplication sharedApplication].keyWindow.rootViewController = [[MainViewController alloc] init];
    
}
@end
